import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Product extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    axios.get("https://practiceapi.devmountain.com/products").then(res => {
      this.setState({ products: res.data });
    });
  }
  render() {
    const products = this.state.products.map((product, index) => {
      if (product.image) {
        return (
          <Link key={index} to={`/details/${product.id}`}>
            <img width="200" src={product.image} />
          </Link>
        );
      }
    });
    return (
      <div className='product'>
        <h1>Products:</h1>
        {products}
      </div>
    );
  }
}
