import React from 'react';
import { Button, Card } from 'tabler-react';
import { useLogoutApi } from '../hooks/useLogoutApi.js';
import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
  const { logout, loading, error } = useLogoutApi();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate('/');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <Card>
        <Card.Body>
          <h1>Bienvenido al Dashboard</h1>
          <Button color="secondary" onClick={handleLogout} loading={loading} block>
            Cerrar sesión
          </Button>
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DashboardPage;
