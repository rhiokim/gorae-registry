import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.__API__}/registry/`
});
