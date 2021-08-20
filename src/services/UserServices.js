import axios from 'axios';
import {BackendConfiguration} from '@config';
const apiClient_json = axios.create({
  baseURL: BackendConfiguration.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

function login(body) {
  return apiClient_json.post('/users/login_with_phone', body);
}

function logout() {
  return apiClient_json.post('/users/logout');
}

function refresh(token) {
  apiClient_json.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  return apiClient_json.post('/users/refresh');
}

export const UserServices = {
  login,
  logout,
  refresh,
};
