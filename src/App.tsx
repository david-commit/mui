import Navbar from './components/Navbar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Feed from './components/Feed';
import {
  Box,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Add from './components/Add';
import { useEffect, useState } from 'react';
import { theme } from './theme';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor='background.default' color='text.primary'>
        <Navbar setMode={setMode} mode={mode}  />
        <Stack
          direction='row'
          justifyContent='space-between'
          mx='auto'
          sx={{
            [theme.breakpoints.up('sm')]: {
              width: '85%',
            },
            gap: '1rem'
          }}
        >
          <LeftSideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightSideBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
