// const axios = require('axios');
import axios from "axios";
// Create an instance of Axios with custom configuration
const instance = axios.create({
  baseURL: "http://localhost:8080", // Base URL for all requests
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    Authorization: "Bearer your_access_token", // Set default headers
    "Content-Type": "application/json",
  },
});

export default instance;
