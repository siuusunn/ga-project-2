import { useState, useEffect } from 'react';
import { getAllPokemon } from './lib/api';
import PokedexCard from './PokedexCard';

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

  return (
    <div className="container has-text-centered">
      {pokemons.results.map((pokemon) => (
        <PokedexCard key={pokemon.name} pokemon={pokemon.name} />
      ))}
    </div>
  );
};

export default PokedexAll;
