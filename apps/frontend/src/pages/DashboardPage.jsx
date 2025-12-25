import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../common/constants.api.js';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'tabler-react';

export function DashboardPage() {
  const navigate = useNavigate();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(API_ENDPOINTS.LOGOUT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!res.ok) throw new Error('Error al cerrar sesión');
      localStorage.removeItem('token');
      return true;
    },
    onSuccess: () => {
      navigate('/');
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <Card>
        <Card.Body>
          <h1>Bienvenido al Dashboard</h1>
          <Button color="secondary" onClick={handleLogout} loading={logoutMutation.isLoading} block>
            Cerrar sesión
          </Button>
          {logoutMutation.isError && (
            <div style={{ color: 'red', marginTop: 8 }}>
              {logoutMutation.error.message}
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DashboardPage;
