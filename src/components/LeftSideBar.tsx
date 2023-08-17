import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SubjectIcon from '@mui/icons-material/Subject';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';

const LeftSideBar = () => {
  return (
    <Box flex={1} sx={{ display: { xs: 'none', sm: 'flex' }, border: '1px solid red' }}>
      <List >
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
            <Switch defaultChecked />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default LeftSideBar