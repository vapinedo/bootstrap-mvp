import { apiRequest } from '@shared/api/apiClient';

export class Repository {
  constructor(baseEndpoint) {
    this.base = baseEndpoint;
  }

  getAll(params) {
    return apiRequest(this.base, { params });
  }

  getById(id) {
    return apiRequest(`${this.base}/${id}`);
  }

  create(data) {
    return apiRequest(this.base, { method: 'POST', body: data });
  }

  update(id, data) {
    return apiRequest(`${this.base}/${id}`, { method: 'PUT', body: data });
  }

  remove(id) {
    return apiRequest(`${this.base}/${id}`, { method: 'DELETE' });
  }
}
