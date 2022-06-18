import "./App.css";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import SortBox from "./components/SortBox";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [sortState, setSortState] = useState("none");
  const [display,setDisplay]=useState(false);
  

  const addClickHandler = (movie) => {
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
       <SortBox setSortState={setSortState}/>
        <SearchBox setMovies={setMovies} movies={movies} />
      </div>
      <div style={{ display: "flex", height: "760px" }}>
        <div className="movieListDiv">
          <MovieList
            setMovies={setMovies}
            sortState={sortState}
            movies={movies}
            addClickHandler={addClickHandler}
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
