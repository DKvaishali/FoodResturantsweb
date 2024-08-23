// src/components/About.js
import React from 'react';
import { Container, Typography, Grid, Button, Paper, Box } from '@mui/material';
import Layout from '../Components/Layout/Layout';
import interior from '../images/inter.jpeg'  ;
import delicious from '../images/deli.png'

const About = () => {
  return (
    <Layout>
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' ,marginBottom:'2rem'}}>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to [Your Restaurant Name]
        </Typography>
        <Typography variant="body1" paragraph>
          At [Your Restaurant Name], we are dedicated to offering you the best dining experience. Our chefs are passionate about
          creating delicious and innovative dishes that combine the finest ingredients with authentic flavors.
        </Typography>
        <Typography variant="body1" paragraph>
          Our restaurant offers a warm and inviting atmosphere where you can enjoy a meal with friends and family. Whether you're
          here for a casual lunch or a special dinner, we strive to make every visit memorable.
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: '2rem' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={interior}
                alt="Restaurant Interior"
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
              <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                Cozy Interior
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={delicious}
                alt="Delicious Food"
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
              <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                Delicious Cuisine
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <Button variant="contained" color="primary" sx={{ marginRight: '1rem' }}>
            View Menu
          </Button>
          <Button variant="outlined" color="primary">
            Contact Us
          </Button>
        </Box>
      </Paper>
    </Container>
    </Layout>
  );
};

export default About;
