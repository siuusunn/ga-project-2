import React from 'react';
import { useState, useEffect } from 'react';
import { getAllPokemons } from '../lib/api';
import axios from 'axios';

const PokedexAll = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}?offset=0&limit=1154`);
  }, []);

  return <p>PokedexAll component</p>;
};

export default PokedexAll;
