import Navbar from './components/Navbar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Feed from './components/Feed';
import { Box, PaletteMode, Stack, ThemeProvider, createTheme } from '@mui/material';
import Add from './components/Add';
import { useEffect, useState } from 'react';


function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light')

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [])
  
   const darkTheme = createTheme({
     palette: {
       mode: mode as PaletteMode,
     },
   });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor='background.default' color='text.primary'>
        <Navbar />
        <Stack
          direction='row'
          justifyContent='space-between'
          width='85%'
          mx='auto'
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
