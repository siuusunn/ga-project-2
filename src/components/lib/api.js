import axios from 'axios';

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemon = () =>
  axios.get(`${BASE_URL}?limit=100000&offset=0`);

export const getSinglePokemon = (id) => axios.get(`${BASE_URL}/${id}`);

export const getBulbasaur = () => axios.get(`${BASE_URL}/1`);

export const getPokedexEntry = (id) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
