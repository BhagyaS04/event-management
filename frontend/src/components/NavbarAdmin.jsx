import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationDialog from './ConfirmationDialog';
import './NavbarAdmin.css';

const pages = [
  { name: 'Dashboard', path: '/admin-dashboard' },
  { name: 'User View', path: '/user-view' }
];

const settings = [
  { name: 'Profile', path: '/profile' },
  { name: 'Dashboard', path: '/admin-dashboard' },
  { name: 'Logout', path: '/' }
];

const NavbarAdmin = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [logoutPath, setLogoutPath] = useState('');

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (path) => {
    if (path === '/') {
      setOpenDialog(true);
      setLogoutPath(path);
    } else {
      navigate(path);
      handleCloseUserMenu();
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('authToken'); 
    sessionStorage.removeItem('authToken'); 

    navigate('/'); 
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar position="absolute" sx={{ backgroundColor: '#242424', height : 70 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 8 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/admin-dashboard"
              className="navbar-title"
            >
              Event Manager
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(({ name, path }) => (
                  <MenuItem key={name} component={Link} to={path} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/admin-dashboard"
              className="navbar-logo"
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push the following elements to the right */}

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {pages.map(({ name, path }) => (
                  <Button
                    key={name}
                    component={Link}
                    to={path}
                    className="navbar-button"
                    sx={{ ml: 2 }}
                  >
                    {name}
                  </Button>
                ))}
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ backgroundColor: 'white', borderRadius: 1, ml: 2 }}
                />
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Aser Avatar" src="https://cdn.wallpapersafari.com/9/81/yaqGvs.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={() => handleMenuItemClick(setting.path)}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmLogout}
        title="Confirmation"
        content="Are you sure you want to logout?"
      />
    </>
  );
};

export default NavbarAdmin;
