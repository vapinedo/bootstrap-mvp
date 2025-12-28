import { Routes, Route } from 'react-router-dom';
import { NotFound } from '@shared/pages/NotFound.jsx';
import { AppLayout } from '@shared/theme/layout/AppLayout';
import { DashboardRouter } from '@features/dashboard/DashboardRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<DashboardRouter />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};