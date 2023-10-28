/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
export const API = axios.create({
    baseURL: 'http://localhost:3000/'
});