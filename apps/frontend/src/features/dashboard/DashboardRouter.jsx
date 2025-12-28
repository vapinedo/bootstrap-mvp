
import { Outlet } from 'react-router-dom';
import { DashboardPage } from '@features/dashboard/pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <>
      <DashboardPage />
      <Outlet />
    </>
  );
};