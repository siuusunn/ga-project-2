import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './lib/api';

function FilterPokemons({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonType, setPokemonType] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${pokemon}`)
      .then((res) => {
        setPokemonData(res.data);
        setPokemonType(res.data.types[0].type.name);
      })
      .catch((err) => console.error(err.response));
  }, []);

  if (!pokemonType) {
    return <p>Loading</p>;
  }
}

export default FilterPokemons;
