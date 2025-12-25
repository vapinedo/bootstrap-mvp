import React from 'react';
import { Card, Button } from 'tabler-react';

export function DashboardNavbar() {
  return (
    <Card style={{ borderRadius: 0, boxShadow: 'none', borderBottom: '1px solid #eee', marginBottom: 0 }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
        <div style={{ fontWeight: 600, fontSize: 20 }}>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#212529' }}>RBAC Dashboard</a>
        </div>
        <div>
          {/* Aquí puedes agregar botones, avatar, etc. */}
          <Button color="primary" size="sm" style={{ marginRight: 8 }}>
            Notificaciones
          </Button>
          <Button color="secondary" size="sm">
            Perfil
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DashboardNavbar;
