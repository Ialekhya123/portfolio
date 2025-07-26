import React from 'react';
import { Box, Typography, Stack, Link, useTheme, Grid, Card, CardContent, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const contactInfo = [
  {
    icon: <PhoneIcon sx={{ fontSize: 32, color: '#00fff7' }} />,
    label: 'Phone',
    value: '+91 9392853711',
    link: 'tel:+919392853711',
    color: '#00fff7',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32, color: '#ff00ea' }} />,
    label: 'Email',
    value: 'alekhya2005@gmail.com',
    link: 'mailto:alekhya2005@gmail.com',
    color: '#ff00ea',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 32, color: '#ffea00' }} />,
    label: 'Location',
    value: 'Bengaluru, Karnataka',
    link: null,
    color: '#ffea00',
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/your-linkedin',
    color: '#0077b5',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    link: 'https://github.com/your-github',
    color: '#333',
  },
];

const Contact = () => {
  const theme = useTheme();
  
  return (
    <Box id="contact" py={6} minHeight="100vh">
      <Typography variant="h3" align="center" sx={{ color: 'secondary.main', fontWeight: 900, mb: 6, letterSpacing: 2 }}>
        Get In Touch
      </Typography>
      
      {/* Contact Information Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {contactInfo.map((info) => (
          <Grid item xs={12} sm={6} md={3} key={info.label}>
            <Card elevation={0} sx={{
              height: '100%',
              bgcolor: 'background.paper',
              border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 0 24px 0 #00fff733'
                : '0 4px 20px 0 rgba(0,0,0,0.1)',
              borderRadius: 3,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: theme.palette.mode === 'dark' 
                  ? `0 8px 32px 0 ${info.color}33`
                  : '0 8px 32px 0 rgba(0,0,0,0.15)',
              },
            }}>
              <CardContent sx={{ 
                p: 3, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}>
                <Box sx={{ mb: 2 }}>
                  {info.icon}
                </Box>
                <Typography variant="h6" sx={{ 
                  color: 'primary.main', 
                  fontWeight: 700,
                  mb: 1,
                }}>
                  {info.label}
                </Typography>
                {info.link ? (
                  <Link 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener" 
                    underline="hover" 
                    sx={{ 
                      color: 'text.primary',
                      textDecoration: 'none',
                      '&:hover': {
                        color: info.color,
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ 
                      color: 'inherit',
                      wordBreak: 'break-word',
                    }}>
                      {info.value}
                    </Typography>
                  </Link>
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {info.value}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Social Links */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ 
          color: 'primary.main', 
          fontWeight: 700, 
          mb: 3,
        }}>
          Connect With Me
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener"
              sx={{
                width: 60,
                height: 60,
                bgcolor: 'background.paper',
                border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 0 16px 0 #00fff733'
                  : '0 4px 16px 0 rgba(0,0,0,0.1)',
                color: social.color,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.1)',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? `0 8px 24px 0 ${social.color}66`
                    : '0 8px 24px 0 rgba(0,0,0,0.2)',
                  bgcolor: 'background.paper',
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact; 