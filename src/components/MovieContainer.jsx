import { useEffect, useState, useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';

import SearchContext from '../context/SearchContext';

import Loading from './Loading';
import Movie from './Movie';

import getMovies from '../apis/getMovies';

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { searchText } = useContext(SearchContext);


    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await getMovies(searchText);
                if (data.Response === 'True') {
                    setMovies(data.Search);
                    setError('');
                } else {
                    setMovies([]);
                    setError('No movies found for the given name. Please refresh and try again.');
                }
            } catch (err) {
                setMovies([]);
                setError('An error occurred while fetching the data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        if (searchText) {
            fetchMovies();
        } else {
            setLoading(false);
            setMovies([]);
            setError('Write Movie Name!');
        }
    }, [searchText]);

    return (
        <Box mt={4}>
            {loading && <Loading />}
            {error && (
                <Typography variant="body1" color="error" gutterBottom>
                    {error}
                </Typography>
            )}
            <Grid container spacing={2}>
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                            <Movie movie={movie} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

export default MovieContainer;