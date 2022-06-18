import React, { useEffect } from "react";

const MovieList = (props) => {
  const getMovieRequest = async () => {
		const url = "https://swapi.dev/api/films/?format=json";

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.results) {
			props.setMovies(responseJson.results);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

  const addClickHandler = (movie) => {
    props.addClickHandler(movie);
  };

  const sortMethods = {
    none: { method: (a, b) => null },
    ByYear: { method: (a, b) => (a.release_date < b.release_date ? -1 : 1) },
    ById: { method: (a, b) => (a.episode_id < b.episode_id ? -1 : 1) },
  };

  return (
    <div>
     
      {props.movies.sort(sortMethods[props.sortState].method).map((movie) =>{
        return (
          <ul
            key={movie.episode_id}
            className="moviesList"
            onClick={() => addClickHandler(movie)}
          >
            <li>EPISODE {movie.episode_id}</li>
            <li>
              EPISODE{movie.episode_id}-{movie.title}
            </li>
            <li>{movie.release_date}</li>
          </ul>
        
        );
      })}
    </div>
  );
};
export default MovieList;
