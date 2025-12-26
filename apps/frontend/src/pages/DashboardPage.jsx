import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../common/constants.api.js';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'tabler-react';
import { UsersWidget } from '../components/UsersWidget.jsx';
import DashboardNavbar from '../components/DashboardNavbar.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import { useState } from 'react';

export function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Sidebar oscuro, colapsable */}
      <div style={{ width: sidebarOpen ? 240 : 64, transition: 'width 0.2s', background: '#212529', color: '#fff', borderRight: '1px solid #1a1d1f', minHeight: '100vh', overflow: 'hidden' }}>
        <DashboardSidebar collapsed={!sidebarOpen} />
      </div>
      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <DashboardNavbar onToggleSidebar={() => setSidebarOpen((v) => !v)} sidebarOpen={sidebarOpen} />
        <div style={{ padding: '32px', flex: 1 }}>
          {/* Grid de widgets */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Tarjeta bienvenida */}
            <Card>
              <Card.Body>
                <h2 style={{ marginBottom: 8 }}>Bienvenido al Dashboard</h2>
                <p style={{ color: '#6c757d', marginBottom: 16 }}>Tienes 5 mensajes nuevos y 2 notificaciones.</p>
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
            {/* Widget de usuarios reales */}
            <UsersWidget />
            {/* Tarjeta de métrica ejemplo */}
            <Card>
              <Card.Body>
                <h3 style={{ marginBottom: 4 }}>Ventas hoy</h3>
                <div style={{ fontSize: 28, fontWeight: 700 }}>6,782</div>
                <div style={{ color: '#28a745', fontWeight: 500 }}>+7% respecto ayer</div>
              </Card.Body>
            </Card>
            {/* Tarjeta de métrica ejemplo */}
            <Card>
              <Card.Body>
                <h3 style={{ marginBottom: 4 }}>Suscripciones activas</h3>
                <div style={{ fontSize: 28, fontWeight: 700 }}>2,986</div>
                <div style={{ color: '#007bff', fontWeight: 500 }}>+4% este mes</div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
