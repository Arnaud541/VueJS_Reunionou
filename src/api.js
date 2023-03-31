import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:19185',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
