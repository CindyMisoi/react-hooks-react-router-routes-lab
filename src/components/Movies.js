import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
    <h1>Movies Page</h1>
    {
      movies.map(({title,genres,time}, index)=>(
        <div key={index}>
          <p>title: {title}</p>
          <p>time: {time}</p>
          <ul>
            {
              genres.map((item, index) =>(
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </div>);
}

export default Movies;
