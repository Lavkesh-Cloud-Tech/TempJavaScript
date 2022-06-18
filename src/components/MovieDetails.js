import React from "react";
const MovieDetails = (props) => {
  return (
    <div>
       {props.display ?(<div><p>
          <b>{props.displayData.title}</b>
        </p>
        <p>{props.displayData.opening_crawl}</p>
        <p>Directed By:{props.displayData.director}</p></div>):<p>No data to display!!</p>}
    </div>
  );
};
export default MovieDetails;
