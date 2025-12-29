import { apiRequest } from './apiClient';

export function getAll(endpoint) {
  return apiRequest(endpoint);
}

export function getById(endpoint, id) {
  return apiRequest(`${endpoint}/${id}`);
}

export function create(endpoint, data) {
  return apiRequest(endpoint, { method: 'POST', body: data });
}

export function update(endpoint, id, data) {
  return apiRequest(`${endpoint}/${id}`, { method: 'PUT', body: data });
}

export function remove(endpoint, id) {
  return apiRequest(`${endpoint}/${id}`, { method: 'DELETE' });
}
