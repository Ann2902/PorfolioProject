import React from "react";

import { Avatar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import dp from "../resources/images/dp.jpg";
import "../resources/css/home.css";
import { userProfileDefaultData } from "../Utils/Constants";

function Home() {
  
  const userName = userProfileDefaultData.Name;

  return (
    <div className="mainContainer">
      <Avatar
        src={dp}
        sx={{
          width: "300px",
          height: "300px",
          position: "absolute",
          right: "130px",
          top: "150px",
          mt: "50px",
          mb: "50px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 0 30px rgba(70, 87, 118, 0.7), 0 0 60px rgba(70, 87, 118, 0.5)", // Glowing effect
          },
        }}
      />
      <Typography variant="h3">Hi There I am 
      </Typography>
      <Typography variant="h1" sx={{ color: "#465776" }}> 
        {userName},
      </Typography>
      <Typography variant="h3" >
        I am into Web Development.
      </Typography>
        
       <Box sx={{ mt: 25 }}></Box>
      <Stack direction="column" justifyContent="left" spacing={3} sx={{ mb: 2 }}>
      <a href="https://www.linkedin.com/in/anuj-dewan-82562525b/" className="resume_button" target="_blank" rel="noopener noreferrer">
      <Typography variant="body1" sx={{ color: 'white' }}>
            Resume
          </Typography>
        <ArrowForwardIcon/>
        </a>
      <Stack direction="row" justifyContent="left" spacing={3} sx={{ mb: 2 }}>
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
      </Stack>
    </div>
  );
}

export default Home;
