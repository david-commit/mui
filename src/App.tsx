import { useState } from 'react';
import Button from '@mui/material/Button';
import { Settings } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <>
      <Button variant='outlined' startIcon={<Settings />}>
        Hello World
      </Button>
      <Button
        variant='contained'
        startIcon={<Settings />}
        sx={{
          backgroundColor: 'purple',
          '&:hover': {
            backgroundColor: 'secondary',
            padding: '5px 2rem',
          },
        }}
      >
        Hello World
      </Button>
      <br />
      <Typography variant='h1' component='p' color='initial'>
        Hello
      </Typography>
    </>
  );
}

export default App;
