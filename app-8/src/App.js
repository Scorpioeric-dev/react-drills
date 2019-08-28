import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./Pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [{ id: 0, name: "ditto", pokemonArray: [] }]
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    let num = 50;
    for (let i = 1; i <= num; i++)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(pokemon => {
        let { id, name } = pokemon.data;
        let newCopy = this.state.characters.slice();
        newCopy.push({ id: id, name });
        this.setState({
          characters: newCopy
        });
      });
  }

  render() {
    // console.log(this.state.characters)
    let sorted = this.state.characters.sort((a, b) => a.id - b.id);
    //what is sorted doing here?
    return (
      <div className="App">
        <h1>App</h1>
        {sorted.map(pokemon => {
          return <Pokemon pokemon={pokemon} />;
        })}
      </div>
    );
  }
}

export default App;
