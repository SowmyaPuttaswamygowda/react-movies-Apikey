import axios from 'axios';

const getMovies = async (value) => {
    try {
        const res = await axios.get(
            `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${value}&page=1`
        );

        if (res.status !== 200) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export default getMovies;