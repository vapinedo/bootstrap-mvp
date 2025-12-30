import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userRoleRepository } from '@core/userRoleRepository';

export function useUserRolesQuery(userId) {
  return useQuery({
    queryKey: ['users', userId, 'roles'],
    queryFn: () => userRoleRepository.getRoles(userId),
    enabled: !!userId,
  });
}

export function useAddUserRoleMutation(userId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (roleId) => userRoleRepository.addRole(userId, roleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['users', userId, 'roles']);
    },
  });
}

export function useRemoveUserRoleMutation(userId) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (roleId) => userRoleRepository.removeRole(userId, roleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['users', userId, 'roles']);
    },
  });
}
