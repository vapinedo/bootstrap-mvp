
import { Outlet } from 'react-router-dom';
import { DashboardPage } from '@modules/dashboard/pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <>
      <DashboardPage />
      <Outlet />
    </>
  );
};