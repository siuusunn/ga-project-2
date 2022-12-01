import { useState, useEffect } from 'react';
import { getAllPokemon } from './lib/api';

const PokedexAll = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    getAllPokemon()
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => console.error(err.response));
  }, []);

  if (!pokemons) {
    return <p>Loading</p>;
  }

  console.log(pokemons);

  return (
    <>
      {pokemons.results.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
  );
};

export default PokedexAll;
