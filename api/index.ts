import axios from "axios";

const api = axios.create({
  baseURL: "https://fe-task-api.mainstack.io/",
  timeout: 10000,
  responseType: "json",
});

export default api;
