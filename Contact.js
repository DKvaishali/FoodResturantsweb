import React from 'react';
import { Container, TextField, Button, Typography, Grid, Box, Paper } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import Layout from '../Components/Layout/Layout';

function ContactPage() {
  return (
    <Layout>
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="primary" size="large">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Box marginTop="4rem">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Phone color="primary" style={{ marginRight: '0.5rem' }} />
              <Typography variant="h6">+1 234 567 890</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Email color="primary" style={{ marginRight: '0.5rem' }} />
              <Typography variant="h6">info@restaurant.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <LocationOn color="primary" style={{ marginRight: '0.5rem' }} />
              <Typography variant="h6">123 Food Street, New York, NY</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Layout>
  );
}

export default ContactPage;
