import logo from "./logo.svg";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import DiscoverMoviesPages from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <nav style={{ marginTop: 10 }}>
        <NavLink
          style={{
            margin: 10,
            border: "solid",
            borderColor: "red",
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
            borderColor: "red",
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
            borderColor: "red",
            borderRadius: 45,
            color: "black",
          }}
          to="/about"
        >
          {" "}
          About
        </NavLink>
      </nav>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPages} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
