import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import { Box } from '@mui/material';
import MainLayout from './layout/MainLayout';

const App = () => {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('theme');
    if (getTheme === 'dark') {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Box sx={{ backgroundColor: (theme) => theme.palette.secondary.main }} className='!w-full !h-screen !overflow-hidden'>
        <MainLayout />
      </Box>
    </ThemeProvider>
  );
}

export default App;
