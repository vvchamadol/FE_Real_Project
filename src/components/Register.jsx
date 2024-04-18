import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




const Register = () => {
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
            Register
    </Typography>

    <form onSubmit={handleSubmit}>

        <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="new-name"
              autoFocus
              onChange={handleChange}
            />
      
        <TextField
              margin="normal"
              required
              fullWidth
              id="surname"
              label="SurName"
              name="surname"
              autoComplete="new-surname"
              autoFocus
              onChange={handleChange}
            />

        <TextField
              margin="normal"
              required
              fullWidth
              id="tel"
              label="Tel"
              name="tel"
              autoComplete="telphone"
              autoFocus
              onChange={handleChange}
            />

        <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />

        <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              autoFocus
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
      </form>
  </Box>
  </Container>
  );
};

export default Register;