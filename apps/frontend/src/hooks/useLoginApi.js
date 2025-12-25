import { useState } from 'react';
import { API_ENDPOINTS } from '../common/constants.api.js';

export function useLoginApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error('Credenciales inválidas');
      const data = await res.json();
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        setToken(data.access_token);
        return data.access_token;
      } else {
        throw new Error('Respuesta inválida del servidor');
      }
    } catch (err) {
      setError(err.message || 'Error de autenticación');
      setToken(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, token };
}
