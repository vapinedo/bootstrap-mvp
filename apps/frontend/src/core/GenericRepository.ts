import { apiRequest } from '@core/apiClient';

export class GenericRepository<T, C = Partial<T>, P extends Record<string, any> = Record<string, any>> {
  protected base: string;

  constructor(baseEndpoint: string) {
    this.base = baseEndpoint;
  }


  getAll(params?: P): Promise<T[]> {
    return apiRequest<T[]>({ endpoint: this.base, options: { params } });
  }


  getById(id: string | number): Promise<T> {
    return apiRequest<T>({ endpoint: `${this.base}/${id}` });
  }


  create(data: C): Promise<T> {
    return apiRequest<T>({ endpoint: this.base, options: { method: 'POST', body: data } });
  }


  update(id: string | number, data: C): Promise<T> {
    return apiRequest<T>({ endpoint: `${this.base}/${id}`, options: { method: 'PUT', body: data } });
  }


  remove(id: string | number): Promise<void> {
    return apiRequest<void>({ endpoint: `${this.base}/${id}`, options: { method: 'DELETE' } });
  }
}
