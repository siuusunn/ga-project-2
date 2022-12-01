import { useEffect, useState } from 'react';
import { getSinglePokemon } from './lib/api';

function PokedexIndividual(pokeId) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getSinglePokemon(pokeId)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.error(err));
  }, [pokeId]);

  return <p>Pokedex Individual</p>;
}
export default PokedexIndividual;
