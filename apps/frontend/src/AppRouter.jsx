import { Routes, Route } from 'react-router-dom';
import { DashboardRouter } from './modules/dashboard/DashboardRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardRouter />} />
    </Routes>
  );
};