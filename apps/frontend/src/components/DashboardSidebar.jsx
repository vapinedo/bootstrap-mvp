import React from 'react';
import { Card, Button } from 'tabler-react';
import { IconHome, IconUsers, IconShield } from '@tabler/icons-react';

export function DashboardSidebar() {
  return (
    <Card style={{ borderRadius: 0, boxShadow: 'none', borderRight: '1px solid #eee', height: '100vh', marginBottom: 0 }}>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '1.5rem 0.75rem' }}>
        <Button color="primary" block style={{ justifyContent: 'flex-start', gap: 12 }}>
          <IconHome size={20} style={{ marginRight: 4 }} />
          Inicio
        </Button>
        <Button color="secondary" block style={{ justifyContent: 'flex-start', gap: 12 }}>
          <IconUsers size={20} style={{ marginRight: 4 }} />
          Usuarios
        </Button>
        <Button color="secondary" block style={{ justifyContent: 'flex-start', gap: 12 }}>
          <IconShield size={20} style={{ marginRight: 4 }} />
          Roles y Permisos
        </Button>
        {/* Agrega más botones según las secciones del dashboard */}
      </Card.Body>
    </Card>
  );
}

export default DashboardSidebar;
