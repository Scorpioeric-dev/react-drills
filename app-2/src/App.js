import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      groceries:['Milk','Butter','Eggs','Flour','Vanilla']
    }
  }

  render() {
    let groceriesToBuy = this.state.groceries.map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })

return <div className='App'>{groceriesToBuy}</div>
  }
}

export default App;









  