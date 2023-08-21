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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
  IconButton,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { theme } from '../theme';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SubjectIcon from '@mui/icons-material/Subject';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledInputBase = styled(InputBase)({
  backgroundColor: 'background.primary',
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
  gap: '0.5rem',
});

const Navbar = ({ setMode, mode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Profile menu
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position='sticky' sx={{ height: '4rem', mb: '1rem' }}>
        <StyledToolbar sx={{ width: '85%', margin: 'auto' }}>
          <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <IconButton sx={{ display: { sm: 'none' } }} onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Pets sx={{ fontSize: '2rem' }} />
          </Box>
          <StyledInputBase placeholder='Search...'></StyledInputBase>
          <StyledBox>
            <IconButton>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                onClick={handleClick}
              />
            </IconButton>
          </StyledBox>
        </StyledToolbar>
      </AppBar>
      {/* -- MOBILE MEMU DRAWER -- */}
      <Drawer
        open={drawerOpen}
        anchor='right'
        onClose={() => setDrawerOpen(false)}
      >
        <List
          sx={{
            // width: '70%',
            p: '4rem 2rem',
          }}
        >
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#'>
              <ListItemIcon>
                <NightlightIcon />
              </ListItemIcon>
              <Switch
                defaultChecked
                onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* -- MOBILE MEMU DRAWER -- */}
      {/* -- PROFILE DROPDOWN -- */}
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
      {/* -- PROFILE DROPDOWN -- */}
    </>
  );
};

export default Navbar;
