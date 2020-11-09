import axios from 'axios';

const api = axios.create({
    baseURL: 'https://metron-api.herokuapp.com/api/v1/backoffice/authentication'
});

export default api;