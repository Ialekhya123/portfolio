import React from 'react';
import { Box, Typography, Card, CardContent, Grid, useTheme } from '@mui/material';

const projects = [
  {
    title: 'AI Powered Traffic Signal Processing',
    role: 'Backend Developer',
    years: 'Present',
    description:
      'Design and simulation of an AI-powered Traffic Signal Processing (TSP) system that dynamically optimizes traffic light phases using deep learning techniques. Adaptive control algorithm adjusts green light durations based on real-time conditions, including emergency vehicles.',
  },
  {
    title: 'AI Business Analyst - TechSaksham',
    role: 'Backend Developer',
    years: '2024 - 2025',
    description:
      'Developed an AI-powered business analytics tool addressing key challenges like sales forecasting, customer segmentation, recommendation, and fraud detection. Presented at TechSaksham Regional Hub.',
  },
  {
    title: 'Course Recommendation System',
    role: 'Backend Developer',
    years: '2024 - 2025',
    description:
      'Designed a personalized course recommendation platform using collaborative and content-based filtering. Suggests courses aligned with career goals, including review analysis, comparisons, and intelligent course matching.',
  },
];

const Projects = () => {
  const theme = useTheme();
  
  return (
    <Box id="projects" p={4} minHeight="100vh">
      <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: 'text.primary' }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.title}>
            <Card elevation={0} sx={{ 
              height: '100%',
              bgcolor: 'background.paper',
              border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 0 24px 0 #00fff7, 0 0 8px 0 #ff00ea'
                : '0 4px 20px 0 rgba(0,0,0,0.1)',
            }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: 'text.primary' }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {project.role} | {project.years}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'text.primary' }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 