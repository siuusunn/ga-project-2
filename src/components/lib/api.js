import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getSinglePokemon = (pokeId) => axios.get(`${BASE_URL}/{pokeId}`);
