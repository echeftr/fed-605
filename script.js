const setMovieGenres = async () => {
  const movieGenresList = document.getElementById("movieGenresList");
  const data = await getMovieGenres();
  data.genres.forEach((genre) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `genre naam: ${genre.name}, id: ${genre.id}`
    );
    li.appendChild(liContent);
    movieGenresList.append(li);
  });
};
setMovieGenres();

const myFavMovie = async () => {
  const data = await getMovieById("tt1979376");
  const movie = data.movie_results[0];
  const favMovieParagraph = document.getElementById("myFavMovie");
  favMovieParagraph.appendChild(document.createTextNode(movie.title));
};
myFavMovie();

const setTopRatedMovies = async () => {
  const top10RatedMovies = document.getElementById("top10RatedMovies");
  const data = await getTopRatedMovies();
  const top10 = data.results.splice(0, 10);
  top10.forEach((movie) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}, rating: ${movie.vote_average}`
    );
    li.appendChild(liContent);
    top10RatedMovies.append(li);
  });
};
setTopRatedMovies();

const setTopRatedActionMovies = async () => {
  const top10RatedActionMovies = document.getElementById(
    "top10RatedActionMovies"
  );
  const data = await getTopRatedActionMovies();
  const top10 = data.results.splice(0, 10);
  top10.forEach((movie) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
    );
    li.appendChild(liContent);
    top10RatedActionMovies.append(li);
  });
};
setTopRatedActionMovies();

const setMoviesYear1975 = async () => {
  const top10RatedActionMovies = document.getElementById("movies1975");
  const data = await getMoviesYear1975();
  const top10 = data.results.splice(0, 20);
  top10.forEach((movie) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}, release date: ${movie.release_date}`
    );
    li.appendChild(liContent);
    top10RatedActionMovies.append(li);
  });
};
setMoviesYear1975();
