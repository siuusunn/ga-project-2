import { Link } from 'react-router-dom';
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

  const titleCasePokemons = pokemons.results.map((pokemon) => {
    const first = pokemon.name.toString().charAt(0).toUpperCase();
    const second = pokemon.name.toString().slice(1);
    return first + second;
  });

  return (
    <div className="container has-text-centered">
      {titleCasePokemons.map((pokemon) => (
        <PokedexCard key={pokemon} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokedexAll;
