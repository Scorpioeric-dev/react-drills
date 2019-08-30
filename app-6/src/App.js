import React, { Component } from "react";
import "./App.css";
import Todo from "./Components/Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
    
  }

  handleChange(value) {
    this.setState({ input: value });
  }

  addTask = () => {
    this.setState({
      //What is spread operator doing here? Spreading the Array
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }
//Always have a return on map!!!! Check your code for syntax errors
  render() {
    let mappedList = this.state.list.map(pizza => {
     return <Todo key={pizza.list} newTask={pizza} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
            placeholder="New Task"
          />

          <button onClick={this.addTask}>Add</button>
        </div>
        {mappedList}
      </div>
    );
  }
}

export default App;
