import axios from "axios";

const api = axios.create({
  baseURL: "http://api.mega-hack.devmatheus.com/",
});

export default api;
