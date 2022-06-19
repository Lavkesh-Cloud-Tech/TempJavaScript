import React, { useEffect } from "react";

const MovieList = (props) => {
  return (
    <div>
      <table className="moviesList">
        {props.movies.map((movie) =>{
          return (
            <tr
              key={movie.episode_id}
              onClick={() => props.onMovieSelectHandler(movie)}
            >
              <td>EPISODE {movie.episode_id}</td>
              <td>
                Episode {movie.episode_id} - {movie.title}
              </td>
              <td>{movie.release_date}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default MovieList;
