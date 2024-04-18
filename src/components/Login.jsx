import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';





const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate()
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', form);
      console.log('http://localhost:8000/login', response.data);  // Assuming the server returns useful data
      let data = response.data
      // set localstorage
      localStorage.setItem('userId', data?._id)
      localStorage.setItem('userRole', data?.role)
      if (data?.role && data?.role === 'admin') await navigateTo('/adminpage')
      if (data?.role && data?.role === 'user') await navigateTo('/userpage')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const navigateTo = async (part) => {
    if (part) {
      await navigate(part)
      window.location.reload()
    }
  }


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
  Login
</Typography>

    <form onSubmit={handleSubmit}>

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

export default Login;
