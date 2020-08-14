import axios from 'axios';

export const usersAPI = axios.create({
  baseURL: 'http://localhost:3333',
});
