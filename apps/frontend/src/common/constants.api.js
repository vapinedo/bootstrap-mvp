// Centralización de endpoints y rutas de la API

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  // Agrega aquí otros endpoints conforme se integren
};
