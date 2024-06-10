import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

import noImage from '../assets/img-not.avif';

const Movie = ({ movie }) => {
    return (
        <Card sx={{ maxWidth: 345, my: 2 }}>
            <CardMedia
                component="img"
                height="500"
                image={movie.Poster === 'N/A' ? noImage : movie.Poster}
                alt={movie.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.Year}
                </Typography>
            </CardContent>
        </Card>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired
    }).isRequired
};

export default Movie;