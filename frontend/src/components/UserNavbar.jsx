import React, { useState, useEffect } from 'react';
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
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from './ConfirmationDialog';
import { Link } from 'react-router-dom';
import axios from 'axios';

const pages = [{ name: 'Dashboard', path: '/user-dashboard' }, 
  {name : 'All Events', path : '/user-dashboard'}, 
  {name:'Your registrations', path : '/user-dashboard'},];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const UserNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [isAvatarVisible, setIsAvatarVisible] = useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useState ('')
  const user = sessionStorage.getItem ('userName')

  // useEffect(() => {
  //   const fetchusername = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:4000/users');
  //       if (res.data) {
  //         setUsername(res.data.name);
  //         console.log (res.data)
  //         console.log('Fetched username:', res.data.name);
  //       } else {
  //         console.error('Unexpected response data format:', res.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching username:', error);
  //     }
  //   };
  //   fetchusername();
  // }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    // Hide the avatar button and navigate to the profile page
    setIsAvatarVisible(false);
    navigate('/user-edit-profile');
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogoutClick = () => {
    navigate('/');
    setOpen(false);
  };

  const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.length > 1
      ? names[0][0] + names[1][0]
      : names[0][0];
    return initials.toUpperCase();
  };

  return (
    <div>
      <AppBar position="static" className='userAppbar' sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5px)', width: '100vw', boxShadow: '5px 5px 70px gray', borderBottom: '0px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/user-dashboard"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Olam
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                {pages.map(({name, path}) => (
                  <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/user-dashboard"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(({name, path}) => (
                <Button
                  key={name}
                  component = {Link}
                  to = {path}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={handleLogoutClick} sx={{ color: 'white', mr: 2 }}>
                <LogoutIcon />
              </IconButton>
              <Tooltip title={user}>
                {/* Conditionally render Avatar button based on isAvatarVisible state */}
                {isAvatarVisible && (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user} src="/static/images/avatar/2.jpg">
                      {user ? getInitials(user) : ''}
                    </Avatar>
                  </IconButton>
                )}
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <ConfirmationDialog
        open={open}
        onClose={handleClose}
        onConfirm={onLogoutClick}
        title="Confirmation"
        content="Are you sure you want to logout?"
      />
    </div>
  );
};

export default UserNavbar;
