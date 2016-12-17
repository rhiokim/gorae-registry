import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.__API__
});

export default axios.create({
  baseURL: `${process.env.__API__}/registry/`
});
