/*
 Starting to consume RESTFull API via axios requests
 Author: Sencer Hamarat
 */

import axios from 'axios';

const API_URL = 'http://localhost:8000';

export class APIService {

    constructor() {
    }

    getUsers() {
        const url = `${API_URL}/api/users/`;
        return axios.get(url).then(response => response.data);
    }

    getUser(pk) {
        const url = `${API_URL}/api/users/${pk}`;
        return axios.get(url).then(response => response.data);
    }
}