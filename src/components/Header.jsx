import { AppBar, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <AppBar position="static">
            <Toolbar
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', color:'#ff9800' }}
            >
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;