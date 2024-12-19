import axios from "axios";

const apiUrl =
  import.meta.env.REACT_APP_API_URL ||
  "https://christmas-recipes-be.onrender.com";

const apiClient = axios.create({
  baseURL: apiUrl,
});

export default apiClient;
