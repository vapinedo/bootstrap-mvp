import { useState } from 'react';
import { UsersWidget } from './UsersWidget.jsx';
import { UsersList } from './UsersList.jsx';
import DashboardSidebar from '../../components/DashboardSidebar.jsx';
import DashboardNavbar from '../../components/DashboardNavbar.jsx';

export default function UsersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ width: sidebarOpen ? 240 : 64, transition: 'width 0.2s', background: '#212529', color: '#fff', borderRight: '1px solid #1a1d1f', minHeight: '100vh', overflow: 'hidden' }}>
        <DashboardSidebar collapsed={!sidebarOpen} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <DashboardNavbar onToggleSidebar={() => setSidebarOpen((v) => !v)} sidebarOpen={sidebarOpen} />
        <div style={{ padding: '32px', flex: 1 }}>
          <UsersWidget />
          <div style={{ marginTop: 32 }}>
            <UsersList />
          </div>
        </div>
      </div>
    </div>
  );
}
