const pelis = require("./pelis");

const args = process.argv.slice(2);

function main() {
  if (args.length === 0) {
    const allMovies = pelis.getAllMovies();
    console.table(allMovies);
  } else {
    const command = args[0];
    if (command === "--sort" && args.length === 2) {
      const sortBy = args[1];
      const sortedMovies = pelis.sortMoviesBy(sortBy);
      console.table(sortedMovies);
    } else if (command === "--search" && args.length === 2) {
      const searchCriteria = args[1];
      const foundMovies = pelis.searchMovies(searchCriteria);
      console.table(foundMovies);
    } else if (command === "--tag" && args.length === 2) {
      const tag = args[1];
      const filteredMovies = pelis.filterMoviesByTag(tag);
      console.table(filteredMovies);
    } else {
      console.log("Comando inválido. Por favor, verifica los parámetros.");
    }
  }
}

main();
