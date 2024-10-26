import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Typography, Button, Modal, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'black',
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Resume() {
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState('black'); 

  const handleOpen = () => {
    setOpen(true);
    setButtonColor('grey'); 
  };
  
  const handleClose = () => {
    setOpen(false);
    setButtonColor('black'); 
  };

  return (
    <Stack spacing={5} sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <Typography variant="h1" sx={{ color: "black", textAlign: 'center', width: '100%' }}>
        Resume
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '50' }}>
            <CodeOffIcon sx={{ width: '40px', height: '40px', marginRight: 1 }} /> Programming Skills
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '50' }}>
            <DesignServicesIcon sx={{ width: '40px', height: '40px', marginRight: 1 }} /> Designing Skills
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold' }}>HTML</Typography>
          <Item><BorderLinearProgress variant="determinate" value={60} sx={{ flex: '1 1 48%' }} /></Item>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold' }}>PS</Typography>
          <Item><BorderLinearProgress variant="determinate" value={45} sx={{ flex: '1 1 48%' }} /></Item>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold' }}>CSS</Typography>
          <Item><BorderLinearProgress variant="determinate" value={65} sx={{ flex: '1 1 48%' }} /></Item>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold' }}>DAVINCI</Typography>
          <Item><BorderLinearProgress variant="determinate" value={40} sx={{ flex: '1 1 48%' }} /></Item>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold' }}>JS</Typography>
          <Item><BorderLinearProgress variant="determinate" value={50} sx={{ flex: '1 1 48%' }} /></Item>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold' }}>CANVA</Typography>
          <Item><BorderLinearProgress variant="determinate" value={60} sx={{ flex: '1 1 48%' }} /></Item>
        </Grid>
      </Grid>
      
      
      <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: buttonColor, 
          color: 'white', 
          marginTop: 2, 
          '&:hover': { backgroundColor: 'grey' }, 
        }} 
        onClick={handleOpen}
      >
        View
      </Button>
    
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Your Image Title
          </Typography>
          <img src="../resources/images/dp.jpg" alt="Pop-up" style={{ width: '100%', marginTop: 10 }} />
        </Box>
      </Modal>
    </Stack>
  );
}

export default Resume;
