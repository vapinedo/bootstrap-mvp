

import { getAll, getById, create, update, remove } from '@core/crudApi';
import { USER_ENDPOINTS } from '@shared/constants/userEndpoints';


export const fetchUsers = () => getAll(USER_ENDPOINTS.base);


export const fetchUserById = (id) => getById(USER_ENDPOINTS.base, id);


export const createUser = (user) => create(USER_ENDPOINTS.base, user);


export const deleteUser = (id) => remove(USER_ENDPOINTS.base, id);


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
