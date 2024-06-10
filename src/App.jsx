import { useState, useMemo } from 'react';
import { CssBaseline, Container, Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SearchContext from './context/SearchContext';

import Header from './components/Header';
import Search from './components/Search';
import MovieContainer from './components/MovieContainer';

const App = () => {
    const [searchText, setSearchText] = useState('man');
    const [mode, setMode] = useState('light');

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: {
                main: '#1976d2'
            },
            secondary: {
                main: '#dc004e'
            },
            background: {
                default: mode === 'light' ? '#f5f5f5' : '#121212'
            }
        },
        typography: {
            h1: {
                fontSize: '2rem',
                fontWeight: 'cursive'
            }
        }
    }), [mode]);

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    console.log(searchText);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SearchContext.Provider value={{ searchText, setSearchText }}>
                <Container>
                    <Box 
                        my={4} 
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            minHeight: '100vh', // Ensure it covers the full height of the screen
                            padding: '20px', // Optional: add some padding
                            borderRadius: '8px' // Optional: add some border radius
                        }}
                    >
                        <Header title="React-Movie-App" />
                        <Button 
                            variant="contained" 
                            onClick={toggleMode}
                            sx={{
                                backgroundColor: mode === 'light' ? theme.palette.primary.main: theme.palette.secondary.main,
                                color: 'black',bgcolor:'#8bc34a',
                                '&:hover': {
                                    backgroundColor: mode === 'light' ? theme.palette.primary.dark : theme.palette.secondary.dark
                                }
                            }}
                        >
                            Click to Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                        <Search />
                        <MovieContainer />
                    </Box>
                </Container>
            </SearchContext.Provider>
        </ThemeProvider>
    );
};

export default App;