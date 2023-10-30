import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Link } from '@mui/material';
import backgroundImage from './back.png';

const Signup = () => {
  const containerStyle = {
    minHeight: '100vh',
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex', // Use flexbox
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  };

  const signupPaperStyle = {
    padding: '60px',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // White background for the signup paper
  };

  return (
    <Grid container style={containerStyle}>
      <Grid item xs={12} sm={6} /> {/* Empty Grid item on the left */}
      <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={3} style={signupPaperStyle}>
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>
          <form>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Link href="#" variant="body2" style={{ marginBottom: '10px', display: 'block' }}>
              Forgot Password?
            </Link>
            <Button variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={false} sm={1} /> {/* Empty Grid item on the right */}
    </Grid>
  );
};

export default Signup;
