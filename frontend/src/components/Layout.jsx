import { Outlet } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';
import Sidepanel from './Sidepanel';
import AdminCard from './AdminCard';

const Layout = () => {
  return (
    <>
      <NavbarAdmin />
      <div style={{ display: 'flex' }}>
        <Sidepanel />
        <Outlet />
        <AdminCard/>
      </div>
    </>
  );
};

export default Layout;
