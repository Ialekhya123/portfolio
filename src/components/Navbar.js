import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ mode, toggleColorMode }) => (
  <AppBar position="fixed" color="primary" elevation={2}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
        R Alekhya
      </Typography>
      <Box>
        {navItems.map((item) => (
          <Button
            key={item.id}
            color="inherit"
            onClick={() => scrollToSection(item.id)}
            sx={{ mx: 1 }}
          >
            {item.label}
          </Button>
        ))}
        <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
          <IconButton color="inherit" onClick={toggleColorMode} sx={{ ml: 2 }}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar; 