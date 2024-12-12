import axios from "axios";

const apiUrl = "http://localhost:5000";

const apiClient = axios.create({
  baseURL: apiUrl,
});

export default apiClient;
