import { Pets } from '@mui/icons-material';
import { AppBar, Toolbar, styled, Typography, InputBase } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledInputBase = styled(InputBase)({
  backgroundColor: 'white',
  borderRadius: '6px',
  paddingLeft: '10px',
  paddingTop: '3px',
  fontSize: '1rem'
});

const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{ height: '4rem' }}>
      <StyledToolbar sx={{ width: '85%', margin: 'auto'}}>
        <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'flex' } }}>
          LOGO
        </Typography>
        <Pets sx={{ display: { sm: 'none' } }} />
        <StyledInputBase placeholder='Search...'></StyledInputBase>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
