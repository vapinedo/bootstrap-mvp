// Funciones para consumir los endpoints de usuarios del backend
import { API_BASE_URL } from '../common/constants.api';

export const getAllUsers = async () => {
  const res = await fetch(`${API_BASE_URL}/security/users`, {
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
};

export const getUserById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/security/users/${id}`, {
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al obtener usuario');
  return res.json();
};

export const createUser = async (user) => {
  const res = await fetch(`${API_BASE_URL}/security/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al crear usuario');
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${API_BASE_URL}/security/users/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al eliminar usuario');
  return res.json();
};

export const getUserRoles = async (id) => {
  const res = await fetch(`${API_BASE_URL}/security/users/${id}/roles`, {
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al obtener roles del usuario');
  return res.json();
};

export const addUserRole = async (id, roleId) => {
  const res = await fetch(`${API_BASE_URL}/security/users/${id}/roles/${roleId}`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al asignar rol');
  return res.json();
};

export const removeUserRole = async (id, roleId) => {
  const res = await fetch(`${API_BASE_URL}/security/users/${id}/roles/${roleId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Error al quitar rol');
  return res.json();
};
