import React, { useState } from 'react';
import axios from 'axios';
//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




const Adminpages = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', form);
      console.log(response.data);  // Assuming the server returns useful data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <Container component="main" maxWidth="xs">
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <Typography component="h1" variant="h5">
            Admin Page
    </Typography>
            <div>
            <a className="btn btn-sm btn-outline-secondary" href="/userinfo">User info</a> <br/>
            </div>
  </Box>
  </Container>
  );
};

export default Adminpages;