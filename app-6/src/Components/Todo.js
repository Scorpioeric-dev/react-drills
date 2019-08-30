import React, { Component } from "react";

export default class Todo extends Component {
    //Assign this.props.newTask in order to recieve prop from App
  render() {
    return <p>{this.props.newTask}</p>;
  }
}
