import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        onChange={props.onSearchInputChangeHandler}
        className="nosubmit"
        id="outlined-basic"
        variant="outlined"
        label="Search"
        value={props.searchText}
      />
    </div>
  );
};
export default SearchBox;
