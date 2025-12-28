
import { Outlet } from 'react-router-dom';
import { UserAdminPage } from '@modules/security/pages';

export const SecurityRouter = () => {
  return (
    <>
      <UserAdminPage />
      <Outlet />
    </>
  );
};