import { API_ENDPOINTS } from './constants.api.js';

export async function loginApi({ email, password }) {
  const res = await fetch(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Credenciales inválidas');
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem('token', data.access_token);
    return data.access_token;
  } else {
    throw new Error('Respuesta inválida del servidor');
  }
}
