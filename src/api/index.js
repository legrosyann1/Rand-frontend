import axios from 'axios';

const baseUrl = 'https://rand-backend.herokuapp.com/user';

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
  responseType: 'json',
});