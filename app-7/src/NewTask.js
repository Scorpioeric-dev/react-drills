import React, { Component } from "react";

export default class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  handleChange(value) {
    this.setState({ input: value });
  }

  addTask = () => {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={e => this.handleChange(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
}
