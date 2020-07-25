import React, { Component } from "react";
import "./ProductCard.css";

export class ProductCard extends Component {
  render() {
    return (
      <div className="w3-quarter w3-row productCardContainer ">
        <div className="content">
          <div className="w3-col s3">
            <img
              className="productImage"
              src={this.props.data.product_picture}
              alt={this.props.data.product_name}
            />
          </div>
          <div
            className="w3-col s9"
            style={{ textAlign: "left", padding: "2% 5%" }}
          >
            <div>
              <b>Product ID : </b>
              {this.props.data.product_id}
            </div>
            <div>
              <b>Product Name : </b>
              {this.props.data.product_name}
            </div>
            <div>
              <b>Product Price : </b>
              {this.props.data.product_price}
            </div>
            <div>
              <b>In Stock : </b>
              {this.props.data.in_stock === 1 ? "Yes" : "No"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
