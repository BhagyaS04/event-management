import * as React from 'react';
import { Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const curvyTextStyle = {
  fontFamily: '"Pacifico", cursive',
  fontSize: '2rem',
  color: 'white',
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: '100%',
  paddingLeft: '2.5em',
  outline: 'none',
  overflow: 'hidden',
  backgroundColor: '#818589',
  borderRadius: '10px',
  border: '2px solid transparent',
  transition: 'all 0.5s',
  '&:hover, &:focus': {
    border: '2px solid #4A9DEC',
    boxShadow: '0px 0px 0px 7px rgba(74, 157, 236, 0.2)',
    backgroundColor: '#d3d3d3',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: 0,
}));

const SearchButton = styled('button')(({ theme }) => ({
    backgroundColor: 'gray',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%) scale(0.9)',
    transition: '.9s ease',
    '&:hover': {
      transform: 'translateY(-50%) scale(1.1)',
      color: 'rgb(255, 255, 255)',
      backgroundColor: '#212121',
    },
  }));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '35em',
  height: '2.5em',
  display: 'flex',
  alignItems: 'center',
}));

const TopPanelUser = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 2,
      paddingLeft: 10,
      marginTop: -8,
      marginBottom: 1,
      borderBottom : '1px solid #71797E'
    }}>
      <Typography variant='h2' style={curvyTextStyle}>
        Picked for you
      </Typography>
      <Box sx={{ flexGrow: 1, paddingLeft: '15vw' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Look for your favorite events here"
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchButton type="submit">Search</SearchButton>
        </Search>
      </Box>
    </Box>
  );
};

export default TopPanelUser;
