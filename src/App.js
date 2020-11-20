import { Route, Switch } from "react-router-dom";
import "./App.css";
import DiscoverMoviesPages from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <div className="App">
      <nav style={{ marginTop: 10 }}>
        {/* <NavLink
          style={{
            margin: 10,
            border: "solid",
            borderColor: "blue",
            color: "black",
            borderRadius: 45,
          }}
          to="/"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          style={{
            margin: 10,
            border: "solid",
            borderColor: "blue",
            borderRadius: 45,
            color: "black",
          }}
          to="/discover"
        >
          {" "}
          Discover
        </NavLink>
        <NavLink
          style={{
            margin: 10,
            border: "solid",
            borderColor: "blue",
            borderRadius: 45,
            color: "black",
          }}
          to="/about"
        >
          {" "}
          About
        </NavLink> */}
      </nav>
      <Switch>
        <Route path="/movie/:id" component={MovieInfo} />
        <Route path="/discover" component={DiscoverMoviesPages} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
