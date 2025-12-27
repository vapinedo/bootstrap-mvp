
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '@theme/layout/AppLayout';
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