import React, { useState } from "react";

import AddMovie from "./components/Movies/AddMovie";
import MovieList from "./components/Movies/MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovieHandler = (movieName, movieRating, movieImg) => {
    setMovieList((prevMovieList) => {
      return [
        ...prevMovieList,
        {
          name: movieName,
          rating: movieRating,
          image: movieImg,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddMovie onAddMovie={addMovieHandler} />
      <MovieList movies={movieList} />
    </div>
  );
}

export default App;
