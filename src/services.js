import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  get(endpoint) {
    return axiosInstace.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstace.post(endpoint, body);
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
