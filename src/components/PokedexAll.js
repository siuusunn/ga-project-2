import { useState, useEffect } from 'react';
import { getAllPokemon } from './lib/api';
import PokedexCard from './PokedexCard';

const PokedexAll = () => {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonType, setPokemonType] = useState('');

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

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div>
        <select
          name="type"
          className="button"
          onChange={handleChange}
          value="type"
        >
          <option>Filter by type:</option>
          <option value="grass">Grass</option>
          <option value="poision">Poision</option>
          <option value="fairy">Fairy</option>
        </select>
      </div>
      <div className="section pokedex-all">
        <div className="container">
          <div className="columns is-multiline">
            {pokemons.results.map((pokemon) => (
              <PokedexCard
                key={pokemon.name}
                pokemon={pokemon.name}
                type={pokemonType}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokedexAll;
