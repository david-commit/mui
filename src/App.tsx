import Navbar from './components/Navbar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Feed from './components/Feed';
import { Box, Stack } from '@mui/material';
import Add from './components/Add';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction='row'
        display='flex'
        justifyContent='space-between'
        width='85%'
        m='auto'
      >
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
