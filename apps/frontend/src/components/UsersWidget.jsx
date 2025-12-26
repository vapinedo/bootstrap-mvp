import { useUsers } from '../security/user.hooks';
import { Card } from 'tabler-react';

export function UsersWidget() {
  const { data: users, isLoading, isError, error } = useUsers();

  return (
    <Card>
      <Card.Body>
        <h3 style={{ marginBottom: 4 }}>Total usuarios</h3>
        {isLoading ? (
          <div>Cargando...</div>
        ) : isError ? (
          <div style={{ color: 'red' }}>{error.message}</div>
        ) : (
          <div style={{ fontSize: 28, fontWeight: 700 }}>{users?.length ?? 0}</div>
        )}
      </Card.Body>
    </Card>
  );
}
