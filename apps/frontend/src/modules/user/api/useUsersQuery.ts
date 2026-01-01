import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@modules/user/api/users.api';

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}
