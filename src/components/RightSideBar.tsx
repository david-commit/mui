import {
  Box,
  Typography,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Avatar,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';

const RightSideBar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
  ];

  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Box sx={{ position: 'fixed', p: 2 }}>
        <Box sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' fontWeight={100} mb='6px'>
            Online Friends
          </Typography>
          <AvatarGroup max={6} sx={{ justifyContent: 'left' }}>
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
        <Box sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' fontWeight={100} mb='6px'>
            Recent Photos
          </Typography>
          <ImageList
            sx={{ width: '100%', height: 340 }}
            cols={3}
            rowHeight={164}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=120&h=120&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=120&h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box sx={{ mb: '2rem', display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' fontWeight={100} >
            Recent Conversations
          </Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='/potrait.jpeg' />
              </ListItemAvatar>
              <ListItemText
                primary='Brunch this weekend?'
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Travis Howard' src='/potrait.jpeg' />
              </ListItemAvatar>
              <ListItemText
                primary='Summer BBQ'
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Cindy Baker' src='/potrait.jpeg' />
              </ListItemAvatar>
              <ListItemText
                primary='Oui Oui'
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSideBar;
