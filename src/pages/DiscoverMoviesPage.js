import React from "react";
import { useState } from "react";
import SearchMovies from "../components/SearchMovies";

export default function DiscoverMoviesPage() {
  //   await fetch("http://www.omdbapi.com/?s=life&apikey=b3d9013d");
  const [data, set_data] = useState([]);
  console.log("HI", data);
  return (
    <div>
      {/* <h1>Movies :</h1> */}
      <SearchMovies setMovies={set_data} />
      {data.map((name) => {
        return (
          <div
            style={{
              margin: 6,
              border: "solid",
              borderColor: "blue",
              borderRadius: 13,
              color: "black",
            }}
          >
            Name : {name.Title} Year : {name.Year}
          </div>
        );
      })}
    </div>
  );
}
