import { NotFound } from '@shared/pages';
import { AppLayout } from '@shared/theme/layout';
import { Routes, Route } from 'react-router-dom';
import { SecurityRouter } from '@modules/security';
import { DashboardRouter } from '@modules/dashboard';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<DashboardRouter />} />
        <Route index path="/security" element={<SecurityRouter />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};