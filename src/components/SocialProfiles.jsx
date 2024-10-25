import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'; 
import TextField from '@mui/material/TextField';
import image from "../resources/images/bg.jpg";
import "../resources/css/social.css";
function SocialProfiles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Typography variant="h1" sx={{ color: "black", textAlign: 'center' }}>
        Let's Connect !
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
        <a href="https://www.linkedin.com/in/anuj-dewan-82562525b/" className="button_link" target="_blank" rel="noopener noreferrer">
          
          <LinkedInIcon />
        </a>
        <a href="https://github.com/" className="button_link" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto:your_email@example.com" className="button_link" target="_blank" rel="noopener noreferrer">
          <MailIcon />
        </a>
        <a href="https://www.instagram.com/" className="button_link" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </Stack>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fixed">
      <Box sx={{ bgcolor: '#fff', height: '75vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', p: 2 }}>
      <Box
  component="img"
  src={image}
  alt="Background"
  sx={{ height: '70vh', width: '100%', objectFit: 'cover' }}
/>
  <Box
    component="form"
    sx={{ display: 'flex', flexDirection: 'column', '& > :not(style)': { m: 1, width: '55ch' } }}
  
    noValidate
    autoComplete="off"
  >
    
    <TextField id="outlined-basic1" label="Name" variant="outlined" />
    <TextField id="outlined-basic2" label="Email" variant="outlined" />
    <TextField id="outlined-basic3" label="Phone" variant="outlined" />
    <TextField
      id="outlined-basic4"
      label="Message"
      variant="outlined"
      multiline
      rows={8} 
      sx={{ height: '230px', marginTop: '16px' }}
    />
    <button className='submit_button'>Submit</button>
  </Box>
 
</Box>


  
  
</Container>

    </React.Fragment>
    
  );
     
    </div>
  );
}

export default SocialProfiles;
