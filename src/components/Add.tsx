import { useState } from 'react';
import {
  Tooltip,
  Fab,
  Box,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const UserBox = styled(Box)({
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    alignItems: 'center',
  });

  return (
    <>
      <Tooltip
        title='Add Post'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: '7.5%' },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            width: 400,
            height: 320,
            bgcolor:'background.default',
             color:'text.primary',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
          }}
        >
          <Typography variant='h6' fontWeight={500}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src='/potrait.jpeg'
              alt='Remy Sharp'
              // sx={{ width: 48, height: 48 }}
            />
            <Typography variant='h6' color='gray' fontSize='1rem'>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id='standard-multiline-static'
            placeholder="What's on your mind"
            multiline
            rows={3}
            variant='standard'
            fullWidth
            sx={{ mt: '1rem', fontSize: '1rem' }}
          />
          <Stack direction='row' gap={1} mt='1rem' color='grey'>
            <EmojiEmotionsIcon />
            <ImageIcon />
            <VideocamIcon />
          </Stack>
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
            sx={{ display: 'flex', mt: '2rem' }}
          >
            <Button sx={{ fontWeight: 'bold', flex: 1 }}>Post</Button>
            <Button>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
