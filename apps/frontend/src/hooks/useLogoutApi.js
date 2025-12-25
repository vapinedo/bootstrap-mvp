import { useState } from 'react';
import { API_ENDPOINTS } from '../common/constants.api.js';

export function useLogoutApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_ENDPOINTS.LOGOUT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!res.ok) throw new Error('Error al cerrar sesión');
      localStorage.removeItem('token');
      return true;
    } catch (err) {
      setError(err.message || 'Error al cerrar sesión');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
}
