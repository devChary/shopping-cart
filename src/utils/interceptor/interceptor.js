import axios from 'axios';

const base_url = `http://localhost:3001`;

// Adding Base URL as per enviroment
const service = axios.create({
    baseURL: base_url
});

// Handling header authorization
service.interceptors.request.use(config => {
console.log("🚀 ~ file: interceptor.js ~ line 12 ~ config", config)
    
    return config
}, err => {
    Promise.reject(err);
});

// Handling Error Responses
service.interceptors.response.use(response => {
    return response.data;
}, err => {
    return Promise.reject(err);
});

export default service;