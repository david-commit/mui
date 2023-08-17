import { useState } from 'react';
import { Logout, PersonAdd, Pets, Settings } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  styled,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Stack,
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
  width: '30%',
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position='sticky' sx={{ height: '4rem' }}>
        <StyledToolbar sx={{ width: '85%', margin: 'auto' }}>
          <Pets sx={{ fontSize: '2rem' }} />
          <StyledInputBase placeholder='Search...'></StyledInputBase>
          <StyledBox>
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color='error'>
              <NotificationsIcon />
            </Badge>
            <Avatar
              src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
              onClick={handleClick}
            />
          </StyledBox>
        </StyledToolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80' />{' '}
          <Stack direction='column'>
            <p>Profile</p>
            <small>@username</small>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize='small' />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
