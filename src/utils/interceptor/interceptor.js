import axios from 'axios';

// Adding Base URL as per enviroment
const service = axios.create({
    baseURL: API_URL
});

// Handling header authorization
service.interceptors.request.use(config => {
    return config
}, err => {
    Promise.reject(err);
});

// Handling Error Responses
service.interceptors.response.use(response => {
    // return response.data;
    throw new Error('API Error!');
}, err => {
    return Promise.reject(err);
});