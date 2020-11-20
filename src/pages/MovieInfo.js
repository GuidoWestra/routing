import Axios from "axios";
import React from "react";

export default function MovieInfo(props) {
  console.log(props);

  //   const [searchTitle, set_searchTitle] = useState("");

  const search = async () => {
    const queryParam = encodeURI(props.match.params.id);
    console.log("param", queryParam);

    const movies = await Axios.get(
      `https://omdbapi.com/?apikey=c0b19989&i=${queryParam}`
    );
    // ).then((result) => {
    //   setMovies(result.data.Search);
    console.log("movie", movies.data);
  };
  search();
  return (
    <div>
      <h1></h1>
    </div>
  );
}
