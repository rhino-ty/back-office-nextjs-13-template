import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}}`,
  },
});

export default instance;
