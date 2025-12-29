// Endpoints para la entidad usuario
export const USER_ENDPOINTS = {
  base: '/security/users',
  byId: (id) => `/security/users/${id}`,
  roles: (id) => `/security/users/${id}/roles`,
  addRole: (id, roleId) => `/security/users/${id}/roles/${roleId}`,
  removeRole: (id, roleId) => `/security/users/${id}/roles/${roleId}`,
};
