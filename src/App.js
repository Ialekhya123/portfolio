import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: { main: '#00fff7' },
          secondary: { main: '#ff00ea' },
          background: { default: '#0a0a13', paper: '#181828' },
          text: { primary: '#e0e0ff', secondary: '#00fff7' },
        }
      : {
          primary: { main: '#1976d2' },
          secondary: { main: '#dc004e' },
          background: { default: '#f5f5f5', paper: '#ffffff' },
          text: { primary: '#333333', secondary: '#666666' },
        }),
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: 'Orbitron, Audiowide, Segoe UI, Roboto, Arial, sans-serif',
    h2: { fontWeight: 900, letterSpacing: 2 },
    h4: { fontWeight: 700, letterSpacing: 1 },
    h5: { fontWeight: 700, letterSpacing: 1 },
    h6: { fontWeight: 600, letterSpacing: 1 },
    button: { fontFamily: 'Audiowide, Orbitron, Segoe UI, sans-serif', fontWeight: 700 },
  },
});

function App() {
  const [mode, setMode] = useState('dark');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ 
        minHeight: '100vh', 
        background: mode === 'dark' 
          ? 'linear-gradient(135deg, #0a0a13 60%, #1a0033 100%)'
          : 'linear-gradient(135deg, #f5f5f5 60%, #e3f2fd 100%)'
      }}>
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <Container maxWidth="md" sx={{ pt: 10, pb: 4, bgcolor: 'transparent !important', background: 'transparent !important' }}>
          <Home />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
