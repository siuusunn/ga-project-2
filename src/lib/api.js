import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemons = () => {
  axios.get(`${BASE_URL}?offset=0&limit=1154`);
};
