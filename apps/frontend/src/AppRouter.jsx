import { NotFound } from './pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import { DashboardRouter } from './modules/dashboard/DashboardRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};