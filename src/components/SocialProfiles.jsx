import React from 'react';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import { Typography, CssBaseline, Container, Stack, Box, TextField } from '@mui/material';
import image from "../resources/images/bg.jpg";
import "../resources/css/social.css";

function SocialProfiles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Typography variant="h1" sx={{ color: "black", textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' }, my: 2 }}>
        Let's Connect!
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }} className="stack_icons">
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
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Box component="img" src={image} alt="Background" sx={{ height: '60vh', width: '100%', objectFit: 'cover', borderRadius: 1, mb: { xs: 2, md: 0 } }} />
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', '& > :not(style)': { m: 1, width: { xs: '100%', sm: '80%', md: '55ch' } } }} noValidate autoComplete="off">
            <TextField id="outlined-basic1" label="Name" variant="outlined" />
            <TextField id="outlined-basic2" label="Email" variant="outlined" />
            <TextField id="outlined-basic3" label="Phone" variant="outlined" />
            <TextField id="outlined-basic4" label="Message" variant="outlined" multiline rows={8} />
            <button className="submit_button">Submit</button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SocialProfiles;
