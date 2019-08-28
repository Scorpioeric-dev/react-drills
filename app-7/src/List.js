import React, { Component } from "react";
import Todo from "./Todo";

export default class List extends Component {
  render() {
    let mappedList = this.props.list.map(el => {
      return <Todo key={el.list} newTask={el} />;
    });
    
   return <div> {mappedList} </div>;
  }
}
