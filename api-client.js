const API_KEY = "4738e27d0a155e2df56e6c7e9c7e314d";
const baseUrl = "https://api.themoviedb.org/3";

// async function getData() {
//   const apiUrl = `${baseUrl}genre/movie/list?api_key=${API_KEY}`;
//   try {
//     const res = await fetch(apiUrl, { method: "GET" });
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

async function getMovieGenres() {
  const endpoint = `${baseUrl}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(endpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

const getMovieById = async (movieId) => {
  const movieIdEndpoint = `${baseUrl}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
  try {
    const res = await fetch(movieIdEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMovies = async () => {
  const topMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${API_KEY}`;
  try {
    const res = await fetch(topMoviesEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedActionMovies = async () => {
  const topRatedActionMoviesEndpoint = `${baseUrl}/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=10000&api_key=${API_KEY}`;
  try {
    const res = await fetch(topRatedActionMoviesEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getMoviesYear1975 = async () => {
  const movies1975Endpoint = `${baseUrl}/discover/movie?primary_release_year=1975&api_key=${API_KEY}`;
  try {
    const res = await fetch(movies1975Endpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
