import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {
      directors.map(({name,movies}, index)=>(
        <div key={index}>
          {name}
          <ul>
           { movies.map((item, index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))
    }
  </div>
    );
}

export default Directors;
