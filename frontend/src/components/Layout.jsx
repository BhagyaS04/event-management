import { Outlet } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';
import Sidepanel from './Sidepanel';
import AdminCard from './AdminCard';

const Layout = () => {
  const backgroundImage = 'url("https://pics.craiyon.com/2023-06-26/7f0e7d37054b4281a3769ce73625b3a6.webp")'; // Replace with your desired image path

  return (
    <>
      <NavbarAdmin />
      <div 
        style={{ 
          display: 'flex', 
          backgroundImage: backgroundImage, // Apply background image
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          // Ensure it covers the full viewport width
        }}
      >
        <Sidepanel />
        <Outlet />
        <AdminCard />
      </div>
    </>
  );
};

export default Layout;