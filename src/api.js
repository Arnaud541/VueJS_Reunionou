import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:19185',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
  },
});

export default apiClient;
