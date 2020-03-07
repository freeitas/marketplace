import axios from "axios";

const axiosInstace = axios.create({
  baseUrl: "http://localhost:3001"
});

export const api = {
  get(endpoint) {
    return axiosInstace.get(endpoint);
  }
};
