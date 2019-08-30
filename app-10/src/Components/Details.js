import React, { Component } from "react";
import axios from "axios";

export default class Details extends Component {
  state = {
    item: []
  };

  componentDidMount() {
    axios
      .get(
        `https://practiceapi.devmountain.com/products/${this.props.match.params.id}`
      )
      .then(res => {
        //setState to the item array to equal the res data
        this.setState({ item: res.data });
      });
  }

  render() {
    return (
      <div className='details'>
        <h2>Details</h2>
        <img width="550" src={this.state.item.image} />
        {/* this allows me to get the price based on penny value from state*/}
        <h4>{`Price: $${this.state.item.price}.00`}</h4>
      </div>
    );
  }
}
