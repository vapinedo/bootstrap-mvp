
import { useRepositoryList, useRepositoryDetail, useRepositoryCreate, useRepositoryDelete } from '@core/useRepository';
import { userRepository } from '@core/userRepository';


export function useUsersQuery() {
  return useRepositoryList(userRepository, 'users');
}


export function useUserQuery(id) {
  return useRepositoryDetail(userRepository, 'users', id);
}


export function useCreateUserMutation() {
  return useRepositoryCreate(userRepository, 'users');
}


export function useDeleteUserMutation() {
  return useRepositoryDelete(userRepository, 'users');
}

export function useUserRolesQuery(id) {
  return useQuery({
    queryKey: ['users', id, 'roles'],
    queryFn: () => fetchUserRoles(id),
    enabled: !!id,
  });
}

export function useAddUserRoleMutation(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (roleId) => addUserRole(id, roleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['users', id, 'roles']);
    },
  });
}

export function useRemoveUserRoleMutation(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (roleId) => removeUserRole(id, roleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['users', id, 'roles']);
    },
  });
}
