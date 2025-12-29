

import { apiRequest } from '@shared/api/apiClient';
import { USER_ENDPOINTS } from '@shared/constants/userEndpoints';


export function fetchUsers() {
  return apiRequest(USER_ENDPOINTS.base);
}


export function fetchUserById(id) {
  return apiRequest(USER_ENDPOINTS.byId(id));
}


export function createUser(user) {
  return apiRequest(USER_ENDPOINTS.base, {
    method: 'POST',
    body: user,
  });
}


export function deleteUser(id) {
  return apiRequest(USER_ENDPOINTS.byId(id), {
    method: 'DELETE',
  });
}


export function fetchUserRoles(id) {
  return apiRequest(USER_ENDPOINTS.roles(id));
}


export function addUserRole(id, roleId) {
  return apiRequest(USER_ENDPOINTS.addRole(id, roleId), {
    method: 'POST',
  });
}


export function removeUserRole(id, roleId) {
  return apiRequest(USER_ENDPOINTS.removeRole(id, roleId), {
    method: 'DELETE',
  });
}
