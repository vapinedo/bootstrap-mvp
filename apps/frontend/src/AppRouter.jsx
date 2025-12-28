import { NotFound } from '@shared/pages';
import { AppLayout } from '@shared/theme/layout';
import { Routes, Route } from 'react-router-dom';
import { DashboardRouter } from '@features/dashboard';

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