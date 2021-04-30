import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = "0249f4e43dbaff1461bfa32dea9cf5f7"

axios.defaults.baseURL = BASE_URL;

const fetchMovies = (query) => {
    const url = `search/movie?query=${query}&api_key=${API_KEY}`;
    return axios.get(url).then(({ data }) => {
      return data.results;
    });
  };

  const fetchTrending = () => {
    const url = `trending/movie/day?api_key=${API_KEY}`;
    return axios.get(url).then(({ data }) => {
      return data.results;
    });
  };

  const fetchMovieDetails = (movieId) => {
    const url = `movie/${movieId}?&language=en-US&api_key=${API_KEY}`;
    return axios.get(url).then(({ data }) => {
      return data;
    });
  };

  const fetchMovieCredits = (movieId) => {
    const url = `movie/${movieId}/credits?&language=en-US&api_key=${API_KEY}`;
    return axios.get(url).then(({ data }) => {
      return data.cast;
    });
  };

  const fetchMovieReviews = (movieId) => {
    const url = `movie/${movieId}/reviews?&language=en-US&api_key=${API_KEY}`;
    return axios.get(url).then(({ data }) => {
      return data.results;
    });
  };
  
  
  
  
 export default {fetchMovies, fetchTrending, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews}