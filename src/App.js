import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DiscoverMoviesPages from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPages} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
