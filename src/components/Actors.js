import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {
      actors.map(({name,movies},index)=>(
        <div key={index}>
          {name}
          <ul>
            {
              movies.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </div>
  );
}

export default Actors;
