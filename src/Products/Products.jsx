import React, { Component } from "react";
import "./Products.css";
import { ProductCard } from "../ProductCard/ProductCard";
export class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.the145east.com/api/getAllProducts")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            data: data,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    if (this.state.error)
      return (
        <div style={{ marginTop: "200px" }}>
          Something is wrong please try again later
        </div>
      );
    else if (!this.state.isLoaded)
      return (
        <div style={{ marginTop: "200px" }}>
          Please wait we are loading the view
        </div>
      );
    else {
      return (
        <div>
          <div className="w-xlarge">Products Page</div>
          <div className="w3-row" style={{ marginTop: "30px" }}>
            <div style={{ marginTop: "30px" }}>
              {console.log(this.state.data)}
              {this.state.data.map((data) => (
                <ProductCard data={data} />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Products;
