import { useState } from 'react';
import { Pets } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { theme } from '../theme';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledInputBase = styled(InputBase)({
  backgroundColor: 'white',
  borderRadius: '6px',
  paddingLeft: '10px',
  paddingTop: '3px',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const Navbar = () => {
  

  return (
    <>
      <AppBar position='sticky' sx={{ height: '4rem' }}>
        <StyledToolbar sx={{ width: '85%', margin: 'auto' }}>
          <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'flex' } }}>
            LOGO
          </Typography>
          <Pets sx={{ display: { sm: 'none' } }} />
          <StyledInputBase placeholder='Search...'></StyledInputBase>
          <StyledBox>
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color='error'>
              <NotificationsIcon />
            </Badge>
            <Avatar src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80' />
          </StyledBox>
        </StyledToolbar>
      </AppBar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
