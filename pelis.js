const fs = require('fs');

const moviesData = JSON.parse(fs.readFileSync(__dirname + '/pelis.json'));

const getAllMovies = () => moviesData;

const sortMoviesBy = (property) => {
  const sortedMovies = moviesData.slice();
  sortedMovies.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
  return sortedMovies;
};

const searchMovies = (searchCriteria) => {
  const lowercaseCriteria = searchCriteria.toLowerCase();
  return moviesData.filter((movie) =>
  movie.title.toLowerCase().includes(lowercaseCriteria)
  );
};

const filterMoviesByTag = (tag) => {
  const lowercaseTag = tag.toLowerCase();
  return moviesData.filter((movie) =>
  movie.tags.includes(lowercaseTag)
  );
};

module.exports = {
  getAllMovies,
  sortMoviesBy,
  searchMovies,
  filterMoviesByTag,
};