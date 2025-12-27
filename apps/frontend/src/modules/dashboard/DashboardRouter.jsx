
import { Routes, Route, Outlet } from 'react-router-dom';
import { DashboardPage } from '@modules/dashboard/pages/DashboardPage';
import AppLayout from '@modules/layout/AppLayout';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};