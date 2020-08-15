import axios from 'axios';

export const usersAPI = axios.create({
  baseURL: 'http://localhost:3333',
});

export const PokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});
