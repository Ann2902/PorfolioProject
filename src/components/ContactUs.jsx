import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../resources/css/contactus.css";
import Box from '@mui/material/Box'; 
import image from "../resources/images/map.png";
import { Container, Typography, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';

function ContactUs() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("Calling userData API");
    axios
      .get("http://localhost:7000/users/getUserData") 
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (userData === null) {
    return (
      <Container className="loading">
        <CircularProgress /> {}
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container className="contact-container">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '75vh' }}>
        
        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h5" className="description">{userData.Description}</Typography>
          <Typography variant="h6" className="name">{userData.Name}</Typography>
          <Typography variant="body1" className="address">{userData.Address}</Typography>
          <Typography variant="body1" className="email">{userData.EmailID}</Typography>
          <Typography variant="body1" className="phone">{userData.PhoneNo}</Typography>
          
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', '& > :not(style)': { m: 1, width: '45ch' } }} // Adjust width here
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField id="outlined-basic1" label="Name" variant="outlined" sx={{ flex: 1, marginRight: 1 }} />
              <TextField id="outlined-basic2" label="Email" variant="outlined" sx={{ flex: 1 }} />
            </Box>
            <TextField
              id="outlined-basic4"
              label="Message"
              variant="outlined"
              multiline
              rows={3} 
              sx={{ height: '100px', marginTop: '16px' }} 
            />
            <button className='submit_button'>Submit</button>
          </Box>
        </Box>

        <Box
          component="img"
          src={image}
          alt="Background"
          sx={{ height: '70vh', width: '50%', objectFit: 'cover' }} // Adjust size as needed
        />
      </Box>
    </Container>
  );
}

export default ContactUs;
