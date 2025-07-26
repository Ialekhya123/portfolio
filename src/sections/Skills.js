import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ReactIcon from '@mui/icons-material/Tag';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import FunctionsIcon from '@mui/icons-material/Functions';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudIcon from '@mui/icons-material/Cloud';

const techSkills = [
  { label: 'Python', icon: <FunctionsIcon sx={{ fontSize: 48, color: '#00fff7' }} /> },
  { label: 'JavaScript', icon: <JavascriptIcon sx={{ fontSize: 48, color: '#ffea00' }} /> },
  { label: 'HTML', icon: <CodeIcon sx={{ fontSize: 48, color: '#ff5722' }} /> },
  { label: 'CSS', icon: <CssIcon sx={{ fontSize: 48, color: '#2196f3' }} /> },
  { label: 'React', icon: <ReactIcon sx={{ fontSize: 48, color: '#00d8ff' }} /> },
  { label: 'Git', icon: <GitHubIcon sx={{ fontSize: 48, color: '#fff' }} /> },
  { label: 'Flask', icon: <TerminalIcon sx={{ fontSize: 48, color: '#8bc34a' }} /> },
  { label: 'Jupyter', icon: <DataObjectIcon sx={{ fontSize: 48, color: '#ff00ea' }} /> },
  { label: 'Prophet', icon: <CloudIcon sx={{ fontSize: 48, color: '#00bcd4' }} /> },
  { label: 'Scikit-learn', icon: <CloudIcon sx={{ fontSize: 48, color: '#00bcd4' }} /> },
];

const softSkills = [
  'Project Management',
  'Public Relations',
  'Teamwork',
  'Time Management',
  'Leadership',
  'Effective Communication',
  'Critical Thinking',
];

const languages = [
  'English (Fluent)',
  'Hindi (Fluent)',
  'Telugu (Fluent)',
  'Kannada (Intermediate)',
];

const frameworks = ['Flask', 'Git', 'Prophet', 'Scikit-learn', 'Jupyter Notebook'];
const aiConcepts = ['Clustering', 'Recommendation Systems', 'Forecasting', 'Anomaly Detection'];

const certifications = [
  {
    name: 'Introduction to NLP',
    provider: 'Onwingspan (Infosys SpringBoard)',
    year: 'May 2025',
  },
  {
    name: 'Python Programming (Part 1, 2 & Foundation)',
    provider: 'Onwingspan (Infosys SpringBoard)',
    year: 'Oct 2024',
  },
  {
    name: 'Python Foundation Certification',
    provider: 'Onwingspan (Infosys SpringBoard)',
    year: 'Sep 2024',
  },
  {
    name: 'Applied Artificial Intelligence: Practical Implementations',
    provider: 'TechSaksham / Edunet Foundation',
    year: '',
  },
  {
    name: 'Web Development with HTML,CSS,JS',
    provider: 'DataFlair',
    year: 'Oct 2024',
  },
  {
    name: 'Introduction to Pandas',
    provider: 'DataFlair',
    year: 'Feb 2025',
  },
  {
    name: 'Introduction to OpenCV',
    provider: 'DataFlair',
    year: 'Feb 2022',
  },
];

const Skills = () => {
  const theme = useTheme();
  
  return (
    <Box id="skills" p={4} minHeight="100vh" display="flex" alignItems="center" position="relative">
      {/* Vertical Skills Label */}
      <Box sx={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        zIndex: 2,
        bgcolor: 'transparent',
        px: 2,
      }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 2 }}>
          Skills
        </Typography>
      </Box>
      <Box flex={1} ml={{ xs: 0, sm: 8 }}>
        <Typography variant="h3" align="center" sx={{ color: 'secondary.main', fontWeight: 900, mb: 2, letterSpacing: 2 }}>
          Technical Skills
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch" sx={{ mb: 4 }}>
          {techSkills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill.label} sx={{ display: 'flex' }}>
              <Paper elevation={0} sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: theme.palette.mode === 'dark' ? '0 2px 16px 0 #000' : '0 4px 20px 0 rgba(0,0,0,0.1)',
                minHeight: 140,
                height: 200,
                flex: 1,
                justifyContent: 'center',
                border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.05)',
                  boxShadow: theme.palette.mode === 'dark' ? '0 4px 32px 0 #00fff7' : '0 8px 32px 0 rgba(0,0,0,0.2)',
                },
              }}>
                {skill.icon}
                <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 700, mt: 1, fontFamily: 'Orbitron', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', textAlign: 'center' }}>
                  {skill.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" flexDirection="column" gap={6} justifyContent="center" alignItems="center">
          {/* Soft Skills Section */}
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Typography variant="h4" align="center" sx={{ color: 'primary.main', fontWeight: 700, mb: 4, letterSpacing: 1 }}>
              Soft Skills
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {softSkills.map((skill) => (
                <Grid item xs={6} sm={4} md={3} key={skill}>
                  <Card elevation={0} sx={{
                    bgcolor: 'background.paper',
                    border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 0 16px 0 #00fff733'
                      : '0 4px 16px 0 rgba(0,0,0,0.1)',
                    borderRadius: 2,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 8px 24px 0 #00fff7'
                        : '0 8px 24px 0 rgba(0,0,0,0.15)',
                    },
                  }}>
                    <CardContent sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      minHeight: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}>
                        {skill}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Languages Section */}
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Typography variant="h4" align="center" sx={{ color: 'primary.main', fontWeight: 700, mb: 4, letterSpacing: 1 }}>
              Languages
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {languages.map((lang) => (
                <Grid item xs={12} sm={6} md={3} key={lang}>
                  <Card elevation={0} sx={{
                    bgcolor: 'background.paper',
                    border: theme.palette.mode === 'dark' ? '2px solid #ff00ea' : '2px solid #dc004e',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 0 16px 0 #ff00ea33'
                      : '0 4px 16px 0 rgba(0,0,0,0.1)',
                    borderRadius: 3,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 8px 24px 0 #ff00ea'
                        : '0 8px 24px 0 rgba(0,0,0,0.15)',
                    },
                  }}>
                    <CardContent sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      minHeight: 100,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Typography variant="h6" sx={{ 
                        color: 'secondary.main',
                        fontWeight: 700,
                        mb: 1,
                      }}>
                        {lang.split(' (')[0]}
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        color: 'text.secondary',
                        fontStyle: 'italic',
                      }}>
                        {lang.includes('(') ? lang.split('(')[1].replace(')', '') : ''}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Frameworks & Tools Section */}
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Typography variant="h4" align="center" sx={{ color: 'primary.main', fontWeight: 700, mb: 4, letterSpacing: 1 }}>
              Frameworks & Tools
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {frameworks.map((fw) => (
                <Grid item xs={6} sm={4} md={2.4} key={fw}>
                  <Card elevation={0} sx={{
                    bgcolor: 'background.paper',
                    border: theme.palette.mode === 'dark' ? '2px solid #ffea00' : '2px solid #ff9800',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 0 16px 0 #ffea0033'
                      : '0 4px 16px 0 rgba(0,0,0,0.1)',
                    borderRadius: 2,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px) rotate(2deg)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 8px 24px 0 #ffea00'
                        : '0 8px 24px 0 rgba(0,0,0,0.15)',
                    },
                  }}>
                    <CardContent sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      minHeight: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                      }}>
                        {fw}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* AI/ML Concepts Section */}
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Typography variant="h4" align="center" sx={{ color: 'primary.main', fontWeight: 700, mb: 4, letterSpacing: 1 }}>
              AI/ML Concepts
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {aiConcepts.map((ai) => (
                <Grid item xs={12} sm={6} md={3} key={ai}>
                  <Card elevation={0} sx={{
                    bgcolor: 'background.paper',
                    border: theme.palette.mode === 'dark' ? '2px solid #00ff88' : '2px solid #4caf50',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 0 16px 0 #00ff8833'
                      : '0 4px 16px 0 rgba(0,0,0,0.1)',
                    borderRadius: 3,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 8px 24px 0 #00ff88'
                        : '0 8px 24px 0 rgba(0,0,0,0.15)',
                    },
                  }}>
                    <CardContent sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      minHeight: 100,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Typography variant="h6" sx={{ 
                        color: theme.palette.mode === 'dark' ? '#00ff88' : '#4caf50',
                        fontWeight: 700,
                      }}>
                        {ai}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        {/* Certifications Section */}
        <Box py={6}>
          <Typography variant="h3" align="center" sx={{ color: 'secondary.main', fontWeight: 900, mb: 6, letterSpacing: 2 }}>
            Certifications
          </Typography>
          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            {/* Timeline line */}
            <Box sx={{
              position: 'absolute',
              left: { xs: 20, sm: 50 },
              top: 0,
              bottom: 0,
              width: 3,
              bgcolor: 'primary.main',
              borderRadius: 2,
            }} />
            
            {certifications.map((cert, index) => (
              <Box key={cert.name + cert.provider} sx={{ 
                position: 'relative', 
                mb: 4,
                pl: { xs: 6, sm: 8 },
              }}>
                {/* Timeline dot */}
                <Box sx={{
                  position: 'absolute',
                  left: { xs: 16, sm: 46 },
                  top: 20,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
                  border: '3px solid',
                  borderColor: 'background.paper',
                  zIndex: 2,
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 0 12px 0 #ff00ea'
                    : '0 2px 8px 0 rgba(0,0,0,0.2)',
                }} />
                
                <Card elevation={0} sx={{
                  bgcolor: 'background.paper',
                  border: theme.palette.mode === 'dark' ? '2px solid #00fff7' : '2px solid #1976d2',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 0 24px 0 #00fff733'
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
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                      <Typography variant="h6" sx={{ 
                        color: 'primary.main', 
                        fontWeight: 700,
                        flex: 1,
                        mr: 2,
                      }}>
                        {cert.name}
                      </Typography>
                      {cert.year && (
                        <Typography variant="caption" sx={{ 
                          color: 'secondary.main', 
                          fontWeight: 600,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,0,234,0.1)' : 'rgba(220,0,78,0.1)',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          whiteSpace: 'nowrap',
                        }}>
                          {cert.year}
                        </Typography>
                      )}
                    </Box>
                    <Typography variant="body2" sx={{ 
                      color: 'text.secondary',
                      fontStyle: 'italic',
                    }}>
                      {cert.provider}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills; 