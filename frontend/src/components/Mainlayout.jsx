import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin'; // Import your Navbar
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/signup';

  return (
    <Box>
      {!isAuthPage && <NavbarAdmin />} {/* Render Navbar only if not on login or signup */}
      <Box sx={{ padding: '16px' }}> {/* Main content area */}
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
