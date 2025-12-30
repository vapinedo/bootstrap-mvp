// core/useRepository.js
// Hooks genéricos para consumir un Repository con React Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useRepositoryList(repo, queryKey, params) {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => repo.getAll(params),
  });
}

export function useRepositoryDetail(repo, queryKey, id) {
  return useQuery({
    queryKey: [queryKey, id],
    queryFn: () => repo.getById(id),
    enabled: !!id,
  });
}

export function useRepositoryCreate(repo, queryKey) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => repo.create(data),
    onSuccess: () => queryClient.invalidateQueries([queryKey]),
  });
}

export function useRepositoryUpdate(repo, queryKey) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => repo.update(id, data),
    onSuccess: () => queryClient.invalidateQueries([queryKey]),
  });
}

export function useRepositoryDelete(repo, queryKey) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => repo.remove(id),
    onSuccess: () => queryClient.invalidateQueries([queryKey]),
  });
}
