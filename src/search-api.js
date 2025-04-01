import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRiZTE2MjdiOGViOWMyNTQ0MGZlNzlkYjE0NGNlMiIsIm5iZiI6MTc0MzMyNTAzMy40MzM5OTk4LCJzdWIiOiI2N2U5MDc2OTdhNzUyOTRiNzZjNjk5YjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.I8oZ7IyzbM82EEyn1S-t3DRaokSuzacxq7xzx57yhTQ"; // Замініть на ваш токен

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
    },
    params: {
        language: "uk-UA"
    }
});

async function fetchMovies(endpoint, extraParams = {}) {
    try {
        const response = await apiClient.get(endpoint, { params: extraParams });
        return response.data;
    } catch (error) {
        console.error("Помилка при запиті до TMDB:", error);
        return null;
    }
}

export const getPopularMovies = async () => {
    return fetchMovies("/movie/popular", { page: 1 });
};

export const searchMovies = async (query) => {
    return fetchMovies("/search/movie", { query, page: 1 });
};

export const getMovieDetails = async (movieId) => {
    return fetchMovies(`/movie/${movieId}`);
};

export const getMovieCredits = async (movieId) => {
    return fetchMovies(`/movie/${movieId}/credits`);
};

export const getMovieReviews = async (movieId) => {
    return fetchMovies(`/movie/${movieId}/reviews`);
};
































