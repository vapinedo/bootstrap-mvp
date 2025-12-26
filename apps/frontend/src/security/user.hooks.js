import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as userApi from './user.api';

// Hook para obtener todos los usuarios
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getAllUsers,
  });
}

// Hook para obtener un usuario por ID
export function useUser(id) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userApi.getUserById(id),
    enabled: !!id,
  });
}

// Hook para crear usuario
export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.createUser,
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });
}

// Hook para eliminar usuario
export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });
}

// Hook para roles de usuario
export function useUserRoles(id) {
  return useQuery({
    queryKey: ['user', id, 'roles'],
    queryFn: () => userApi.getUserRoles(id),
    enabled: !!id,
  });
}

export function useAddUserRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, roleId }) => userApi.addUserRole(id, roleId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries(['user', variables.id, 'roles']);
    },
  });
}

export function useRemoveUserRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, roleId }) => userApi.removeUserRole(id, roleId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries(['user', variables.id, 'roles']);
    },
  });
}
