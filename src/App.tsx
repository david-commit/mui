import Navbar from './components/Navbar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Feed from './components/Feed';
import { Box, Stack } from '@mui/material';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' display='flex' justifyContent='space-between'>
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </Stack>
    </Box>
  );
}

export default App;
