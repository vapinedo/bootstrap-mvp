import { GenericRepository } from '@core/GenericRepository';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface User {
  id: number;
  email: string;
  username: string;
}

export type UserPayload = Partial<Omit<User, 'id'>>;

const userRepository = new GenericRepository<User, UserPayload>('/security/users');

export function useUser() {
  const queryClient = useQueryClient();

  // Queries
  const getAllUsers = () =>
    useQuery({
      queryKey: ['users'],
      queryFn: () => userRepository.getAll(),
    });

  const getUserById = (id: number) =>
    useQuery({
      queryKey: ['users', id],
      queryFn: () => userRepository.getById(id),
      enabled: !!id,
    });

  // Mutations
  const createUser = useMutation({
    mutationFn: (data: UserPayload) => userRepository.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateUser = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UserPayload }) => userRepository.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteUser = useMutation({
    mutationFn: (id: number) => userRepository.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
}
