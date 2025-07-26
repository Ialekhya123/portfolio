import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    institution: 'K S School of Engineering and Management',
    degree: 'Artificial Intelligence and Data Science',
    years: '2022 – 2026',
    details: 'Bachelor of Technology',
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#00fff7' }} />,
  },
  {
    institution: 'Sri Chaitanya College',
    degree: 'MPC',
    years: '2020 – 2022',
    details: 'Percentage: 91%',
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#ff00ea' }} />,
  },
];

const Education = () => {
  const theme = useTheme();
  
  return (
    <Box id="education" py={6} minHeight="100vh">
      <Typography variant="h3" align="center" sx={{ color: 'secondary.main', fontWeight: 900, mb: 6, letterSpacing: 2 }}>
        Education
      </Typography>
      <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
        {/* Timeline line */}
        <Box sx={{
          position: 'absolute',
          left: { xs: 30, sm: 60 },
          top: 0,
          bottom: 0,
          width: 3,
          bgcolor: 'primary.main',
          borderRadius: 2,
        }} />
        
        {education.map((edu, index) => (
          <Box key={edu.institution} sx={{ 
            position: 'relative', 
            mb: 6,
            pl: { xs: 8, sm: 12 },
          }}>
            {/* Timeline dot */}
            <Box sx={{
              position: 'absolute',
              left: { xs: 26, sm: 56 },
              top: 30,
              width: 16,
              height: 16,
              borderRadius: '50%',
              bgcolor: 'secondary.main',
              border: '4px solid',
              borderColor: 'background.paper',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 0 16px 0 #ff00ea'
                : '0 4px 12px 0 rgba(0,0,0,0.2)',
            }}>
              {edu.icon}
            </Box>
            
            <Card elevation={0} sx={{
              bgcolor: 'background.paper',
              border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 0 24px 0 #00fff7, 0 0 8px 0 #ff00ea'
                : '0 4px 20px 0 rgba(0,0,0,0.1)',
              borderRadius: 3,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateX(8px)',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 8px 32px 0 #00fff7'
                  : '0 8px 32px 0 rgba(0,0,0,0.15)',
              },
            }}>
              <CardContent sx={{ p: 4 }}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Typography variant="h5" sx={{ 
                    color: 'primary.main', 
                    fontWeight: 700,
                    flex: 1,
                    mr: 2,
                  }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: 'secondary.main', 
                    fontWeight: 600,
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,0,234,0.1)' : 'rgba(220,0,78,0.1)',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    whiteSpace: 'nowrap',
                  }}>
                    {edu.years}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ 
                  color: 'text.primary',
                  fontWeight: 600,
                  mb: 1,
                }}>
                  {edu.degree}
                </Typography>
                {edu.details && (
                  <Typography variant="body2" sx={{ 
                    color: 'text.secondary',
                    fontStyle: 'italic',
                  }}>
                    {edu.details}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education; 