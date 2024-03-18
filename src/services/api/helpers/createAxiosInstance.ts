import axios, { AxiosInstance } from 'axios';

export function createAxiosInstance(): AxiosInstance {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
}



