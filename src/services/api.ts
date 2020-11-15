import axios from "axios";

const api = axios.create({
  baseURL: "http://api.mega-hack.devmatheus.com/",
  // baseURL: "http://localhost:3333/",
});

export default api;
