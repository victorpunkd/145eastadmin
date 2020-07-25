import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="welcomeMessage">
          <img
            className="logo"
            src="https://s3.ap-south-1.amazonaws.com/145east.com-files/images/static/logo.jpg"
            alt="145East Logo"
          />
          <div style={{ marginTop: 10 }}>Welcome to</div>
          <div>145 East Admin Panel</div>
        </div>
        <div className="pageLinks">
          <Link to="/products">
            <div className="linkToPage">Product Info</div>
          </Link>
          <Link to="/orders">
            <div className="linkToPage">Order Info</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
