import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '@modules/dashboard/pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};