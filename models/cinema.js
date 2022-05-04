const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.selectAllTitle = function () {
  const result = this.films.map((film) => {
    return film.title
  })
  return result
}

// Cinema.prototype.selectByTitle = function (title){
//   const result = this.films.filter((film) => {
//       return film.title === title
//   })
//   return result[0].title
// }

Cinema.prototype.selectByTitle = function (title) {
  const result = this.films.reduce((selectedFilm, film) => {
    if (selectedFilm.title === title) {
      return selectedFilm
    } else {
      return film
    }
  })
  return result
}



Cinema.prototype.selectByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre
  })
  return result
}

Cinema.prototype.findByYear = function (year) {
  const result = this.films.filter((film) => {
    return film.year === year
  })
  return result
}
Cinema.prototype.findByRunningTime = function (running) {
  const result = this.films.filter((film) => {
    return film.length >= running
  })
  return result
}


Cinema.prototype.totalRunningTime = function () {
  const result = this.films.reduce((total, film) => {
    return total + film.length
  }, 0)
  return result
}


module.exports = Cinema;
