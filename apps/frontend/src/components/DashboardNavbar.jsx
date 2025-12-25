import React from 'react';
import { Card, Button } from 'tabler-react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function DashboardNavbar({ onToggleSidebar, sidebarOpen }) {
  return (
    <Card style={{ borderRadius: 0, boxShadow: 'none', borderBottom: '1px solid #eee', marginBottom: 0 }}>
      <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button color="secondary" size="sm" onClick={onToggleSidebar} style={{ minWidth: 32, padding: 0 }} title={sidebarOpen ? 'Colapsar menú' : 'Expandir menú'}>
            {sidebarOpen ? <IconChevronLeft size={20} /> : <IconChevronRight size={20} />}
          </Button>
          <a href="/dashboard" style={{ textDecoration: 'none', color: '#212529', fontWeight: 600, fontSize: 20 }}>RBAC Dashboard</a>
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

// ...existing code...
