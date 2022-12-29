const API_KEY = '778514cd0c35430bd38f659c52db3e68';
const URL_TRENDING_MOVIE = 'https://api.themoviedb.org/3/trending/movie/week?';
const URL_BY_NAME = 'https://api.themoviedb.org/3/search/movie?';
const URL_BY_ID = 'https://api.themoviedb.org/3/movie/';

async function fetchTrendingMovie() {
  const response = await fetch(
    `${URL_TRENDING_MOVIE}api_key=${API_KEY}&total_pages=20`
  );
  const trendingMovie = await response.json();
  return trendingMovie.results;
}

async function fetchMovies(searchQuery) {
  const response = await fetch(
    `${URL_BY_NAME}api_key=${API_KEY}&query=${searchQuery}&page=1`
  );

  const movies = await response.json();
  return movies.results;
}

async function fetchMovieById(id) {
  const response = await fetch(`${URL_BY_ID}${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

async function fetchCredits(id) {
  const response = await fetch(`${URL_BY_ID}${id}/credits?api_key=${API_KEY}`);
  const data = await response.json();
  return data.cast;
}

async function fetchReviews(id) {
  const response = await fetch(`${URL_BY_ID}${id}/reviews?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export {
  fetchTrendingMovie,
  fetchMovies,
  fetchMovieById,
  fetchCredits,
  fetchReviews,
};
