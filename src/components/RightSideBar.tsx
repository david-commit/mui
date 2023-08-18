import { Box, Typography, AvatarGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const RightSideBar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Box sx={{ position: 'fixed', p: 2 }}>
        <Typography variant='h5' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt='Remy Sharp' src='/potrait.jpeg' />
          <Avatar alt='Travis Howard' src='/potrait.jpeg' />
          <Avatar alt='Agnes Walker' src='/potrait.jpeg' />
          <Avatar alt='Trevor Henderson' src='/potrait.jpeg' />
          <Avatar alt='Trevor Henderson' src='/potrait.jpeg' />
          <Avatar alt='Trevor Henderson' src='/potrait.jpeg' />
          <Avatar alt='Trevor Henderson' src='/potrait.jpeg' />
          <Avatar alt='Trevor Henderson' src='/potrait.jpeg' />
          <Avatar alt='Trevor Henderson' src='/potrait.jpeg' />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default RightSideBar;
