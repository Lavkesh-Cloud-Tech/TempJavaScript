import React, { useState, useEffect } from "react";

const SearchBox = (props) => {
  const [inputText, setInputText] = useState("");

  useEffect(()=>{
    const filteredData = props.movies.filter((movie) => {

        if (inputText === '') {
            return movie;
        }
       
        else {
            return movie.title.toLowerCase().includes(inputText);
        }

    })
    props.setMovies(filteredData);
},[inputText]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        onChange={inputHandler}
        className="nosubmit"
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        value={inputText}
      />
    </div>
  );
};
export default SearchBox;
