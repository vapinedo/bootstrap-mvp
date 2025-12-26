import React from 'react';
import { Card, Button } from 'tabler-react';
import { IconHome, IconUsers, IconShield } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export default function DashboardSidebar({ collapsed }) {
  const navigate = useNavigate();
  return (
    <Card style={{ borderRadius: 0, boxShadow: 'none', borderRight: '1px solid #1a1d1f', height: '100vh', marginBottom: 0, background: '#212529', color: '#fff' }}>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: collapsed ? '1.5rem 0.5rem' : '1.5rem 0.75rem', alignItems: collapsed ? 'center' : 'flex-start' }}>
        <Button color="primary" block style={{ justifyContent: collapsed ? 'center' : 'flex-start', gap: 12, padding: collapsed ? '0.5rem' : undefined }} onClick={() => navigate('/dashboard')}>
          <IconHome size={20} style={{ marginRight: collapsed ? 0 : 4 }} />
          {!collapsed && 'Inicio'}
        </Button>
        <Button color="secondary" block style={{ justifyContent: collapsed ? 'center' : 'flex-start', gap: 12, padding: collapsed ? '0.5rem' : undefined }} onClick={() => navigate('/usuarios')}>
          <IconUsers size={20} style={{ marginRight: collapsed ? 0 : 4 }} />
          {!collapsed && 'Usuarios'}
        </Button>
        <Button color="secondary" block style={{ justifyContent: collapsed ? 'center' : 'flex-start', gap: 12, padding: collapsed ? '0.5rem' : undefined }}>
          <IconShield size={20} style={{ marginRight: collapsed ? 0 : 4 }} />
          {!collapsed && 'Roles y Permisos'}
        </Button>
        {/* Agrega más botones según las secciones del dashboard */}
      </Card.Body>
    </Card>
  );
}
