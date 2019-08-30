import React, { Component } from "react";
import "./App.css";
import Image from "./Image/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image taco={"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} alt=""/>
       
      </div>
    );
  }
}

export default App;
