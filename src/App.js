import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import SortBox from "./components/SortBox";
import MovieDetails from "./components/MovieDetails";

const App = () =>  {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [sortState, setSortState] = useState("DEFAULT");
  const [display,setDisplay]=useState(false);

  const fetchMovies = async () => {
    const url = "https://swapi.dev/api/films/?format=json";
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    let filterMovies = [...movies];
    if (searchText.trim().length > 0) {
      const searchTextInLowercase = searchText.trim().toLowerCase();
      filterMovies = filterMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTextInLowercase);
      });
    }
    setFilterMovies(filterMovies);
  }, [movies, searchText]);

  useEffect(() => {
    const sortMethods = {
      DEFAULT: { method: (a, b) => null },
      ByYear: { method: (a, b) => ( new Date(a.release_date).getTime() < new Date(b.release_date).getTime() ? -1 : 1) },
      ByEpisode: { method: (a, b) => ( +a.episode_id < +b.episode_id ? -1 : 1) },
    };

    const sortedMovies = [...filterMovies].sort(sortMethods[sortState].method);
    setSortedMovies(sortedMovies);
  }, [filterMovies, sortState]);

  const onSearchInputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const onSortInputChangeHandler = (e) => {
    setSortState(e.target.value);
  };

  const onMovieSelectHandler = (movie) => {
    setDisplayData(movie);
    setDisplay(true);
  };
  
  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          border: "1px solid lightgrey",
          height: "60px",
          display: "flex",
          backgroundColor: "lightgray",
        }}
      >
        <SortBox onSortInputChangeHandler={onSortInputChangeHandler}/>
        <SearchBox searchText={searchText} onSearchInputChangeHandler={onSearchInputChangeHandler} />
      </div>
      <div style={{ display: "flex", height: "760px" }}>
        <div className="movieListDiv">
          <MovieList
            movies={sortedMovies}
            onMovieSelectHandler={onMovieSelectHandler}
          />
        </div>
        <div style={{ width: "50%" }}>
          <MovieDetails displayData={displayData} display={display}/>
        </div>
      </div>
    </div>
  );
}

export default App;
