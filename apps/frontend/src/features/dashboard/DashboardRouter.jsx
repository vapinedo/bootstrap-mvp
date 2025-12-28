
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '@shared/theme/layout/AppLayout';
import { DashboardPage } from '@features/dashboard/pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};