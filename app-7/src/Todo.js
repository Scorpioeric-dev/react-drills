import React, { Component } from "react";

export default class Todo extends Component {
  //Assigning this.props.newTask in order to recieve prop from App
  render() {
    return <div>{this.props.newTask}</div>;
  }
}
