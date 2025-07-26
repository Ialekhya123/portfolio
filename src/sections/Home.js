import React from 'react';
import { Box, Typography, Avatar, Button, Stack, Paper, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

const Home = () => {
  const theme = useTheme();
  
  return (
    <Box id="home" sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      bgcolor: 'background.default',
      overflow: 'hidden',
    }}>
      {/* Background Accent */}
      <Box sx={{
        position: 'absolute',
        top: -120,
        left: -120,
        width: 400,
        height: 400,
        bgcolor: 'primary.main',
        opacity: theme.palette.mode === 'dark' ? 0.12 : 0.08,
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(8px)',
      }} />
      <Paper elevation={0} sx={{
        p: { xs: 3, sm: 6 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        maxWidth: 900,
        width: '100%',
        zIndex: 1,
        gap: 4,
        bgcolor: 'background.paper',
        border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 0 24px 0 #00fff7, 0 0 8px 0 #ff00ea'
          : '0 4px 20px 0 rgba(0,0,0,0.1)',
      }}>
        <Avatar
          alt="R Alekhya"
          src="/profile.jpg"
          sx={{ 
            width: 160, 
            height: 160, 
            mr: { sm: 4, xs: 0 }, 
            mb: { xs: 2, sm: 0 }, 
            border: '5px solid', 
            borderColor: 'primary.main' 
          }}
        />
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ 
            letterSpacing: 1,
            color: 'text.primary',
            fontFamily: 'Orbitron, Audiowide, sans-serif'
          }}>
            R Alekhya
          </Typography>
          <Typography variant="h5" color="primary" fontWeight={600} gutterBottom>
            AI & Data Science Undergraduate
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 500 }} color="text.secondary">
            Motivated AI & Data Science undergraduate with strong analytical skills, problem-solving ability, and hands-on project experience. Interested in internships where I can contribute to building intelligent, scalable, and impactful solutions.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              target="_blank"
              sx={{ fontWeight: 700 }}
            >
              Download Resume
            </Button>
            <IconButton color="primary" href="https://www.linkedin.com/in/your-linkedin" target="_blank" size="large">
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <IconButton color="primary" href="https://github.com/your-github" target="_blank" size="large">
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home; 