import { useState } from 'react';
import { Tooltip, Fab, Box, Modal, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
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
            backgroundColor: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
          }}
        >
          <Typography variant='h6' color='gray' fontWeight={500}>
           Create Post
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
