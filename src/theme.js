import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#CD5C08',
        },
        secondary: {
            main: '#132043'
        }
    }
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#132043',
        },
        secondary: {
            main: '#F0F0F0'
        }
    }
});