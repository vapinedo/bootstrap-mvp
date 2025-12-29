import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchUsers,
  createUser,
  deleteUser,
  addUserRole,
  fetchUserById,
  fetchUserRoles,
  removeUserRole,
} from '@modules/user/api/users.api';

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}

export function useUserQuery(id) {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });
}

export function useCreateUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
}

export function useDeleteUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
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
