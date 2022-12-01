import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPokemons } from '../lib/api';
import axios from 'axios';

const PokedexAll = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154')
      .then((res) => {
        setPokemons(res.data);
        console.log(pokemons.results);
      })
      .catch((err) => console.error(err.response));
  }, []);

  return <p>PokedexAll component</p>;
};

export default PokedexAll;
