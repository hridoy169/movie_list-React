import React from "react";
import Card from "../UI/Card";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <Card className={classes.movies}>
      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
          {props.movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <img
                  src={movie.image}
                  alt="spiderman"
                  width="96"
                  height="136"
                ></img>
              </td>
              <td>{movie.name}</td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default MovieList;
