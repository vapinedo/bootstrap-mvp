export interface ApiRequestOptions {
  method?: string;
  body?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

// Lee la URL base del API desde variable de entorno
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function apiRequest<T = any>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  // Si el endpoint ya es absoluto, no anteponer la base
  let finalUrl = endpoint.startsWith('http') ? endpoint : API_BASE_URL.replace(/\/$/, '') + '/' + endpoint.replace(/^\//, '');
  const { method = 'GET', body, params, headers = {} } = options;

  // Agregar parámetros de consulta si existen
  if (params && Object.keys(params).length > 0) {
    const query = new URLSearchParams(params).toString();
    finalUrl += (finalUrl.includes('?') ? '&' : '?') + query;
  }

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(finalUrl, fetchOptions);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Error en la petición');
  }
  
  // Si no hay contenido (ej: DELETE), retorna undefined
  if (response.status === 204) return undefined as T;
  return response.json();
}
