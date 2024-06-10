import { CircularProgress, Box, Typography } from '@mui/material';

const Loading = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 2 }}>
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;