import { apiRequest } from '@shared/api/apiClient';
import { USER_ENDPOINTS } from '@shared/constants/userEndpoints';

export class UserRoleRepository {
  getRoles(userId) {
    return apiRequest(USER_ENDPOINTS.roles(userId));
  }

  addRole(userId, roleId) {
    return apiRequest(USER_ENDPOINTS.addRole(userId, roleId), {
      method: 'POST',
    });
  }

  removeRole(userId, roleId) {
    return apiRequest(USER_ENDPOINTS.removeRole(userId, roleId), {
      method: 'DELETE',
    });
  }
}

export const userRoleRepository = new UserRoleRepository();
