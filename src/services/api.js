import axios from 'axios';

export const backend = axios.create({
  baseURL: 'http://192.168.1.65:8888/api',
  timeout: 5000,
});