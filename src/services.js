import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  get(endpoint) {
    return axiosInstace.get(endpoint);
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
