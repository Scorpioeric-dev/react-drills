import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import routes from "./routes";
import Home from "./Components/Home";
import SignUp from "./Components/Signup";
import Details from "./Components/Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
          <Link to="/details">
            <button>Details</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default App;
