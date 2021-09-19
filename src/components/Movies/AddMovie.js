import React, { useState } from "react";

import classes from "./AddMovie.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddMovie = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredRating, setEnteredRating] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [error, setError] = useState();

  const addMovieHandler = (event) => {
    event.preventDefault();

    if (
      enteredName.trim().length === 0 ||
      enteredRating.trim().length === 0 ||
      enteredImage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and rating (non-empty-values)",
      });
    }

    if (+enteredRating < 1) {
      setError({
        title: "Invalid rating",
        message: "Please enter a valid rating (> 0)",
      });
    }

    props.onAddMovie(enteredName, enteredRating, enteredImage);
    setEnteredName("");
    setEnteredRating("");
    setEnteredImage("");
  };

  const movieNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ratingChangeHandler = (event) => {
    setEnteredRating(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.form_control}>
        <form onSubmit={addMovieHandler}>
          <label htmlFor="movieName">Movie Name: </label>
          <input
            id="movieName"
            type="text"
            value={enteredName}
            onChange={movieNameChangeHandler}
          />
          <label htmlFor="rating">Rating (Out of 10): </label>
          <input
            id="rating"
            type="number"
            value={enteredRating}
            onChange={ratingChangeHandler}
          />
          <label htmlFor="image">Image(url)</label>
          <input
            id="image"
            type="text"
            value={enteredImage}
            onChange={imageChangeHandler}
          />
          <Button type="submit">Add Movie</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddMovie;
