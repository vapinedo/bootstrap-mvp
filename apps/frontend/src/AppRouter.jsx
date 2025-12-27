import { Routes, Route } from 'react-router-dom';
import { NotFound } from '@shared/pages/NotFound.jsx';
import { DashboardRouter } from '@features/dashboard/DashboardRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};