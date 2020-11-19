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
              margin: 15,
              border: "solid",
              borderColor: "gray",
              borderRadius: 13,
              color: "black",
              padding: 10,
              paddingRight: 10,
              paddingBottom: 25,
              width: 350,
            }}
          >
            Name : {name.Title} Year : {name.Year}
            <img
              alt={name.imdbID}
              style={{
                border: "solid",
                borderColor: "black",
                borderRadius: 13,
              }}
              src={name.Poster}
            />
          </div>
        );
      })}
    </div>
  );
}
