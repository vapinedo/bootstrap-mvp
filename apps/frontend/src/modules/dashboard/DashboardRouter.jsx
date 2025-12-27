
import AppLayout from '@/layout/AppLayout';
import { Routes, Route, Outlet } from 'react-router-dom';
import { DashboardPage } from '@modules/dashboard/pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};