
import { Outlet } from 'react-router-dom';
import { UserAdminPage } from '@modules/user/pages';

export const UserRouter = () => {
  return (
    <>
      <UserAdminPage />
      <Outlet />
    </>
  );
};