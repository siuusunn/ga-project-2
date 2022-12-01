import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemon = () =>
  axios.get(`${BASE_URL}?limit=100000&offset=0`);

export const getSinglePokemon = (pokeId) => axios.get(`${BASE_URL}/{pokeId}`);

export const getBulbasaur = () => axios.get(`${BASE_URL}/1`);
