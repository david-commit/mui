import { Stack } from '@mui/material';
import PostCard from './PostCard';

const Feed = () => {
  return (
    <Stack flex={4} sx={{ height: '100%' }}>
      <PostCard />
      <PostCard />
      <PostCard />
    </Stack>
  );
};

export default Feed;
