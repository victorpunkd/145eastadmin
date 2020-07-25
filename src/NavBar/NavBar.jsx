import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isNavBarOpen: false,
    };
  }
  handleOpenNavbarOptions = () => {
    this.setState({ isNavBarOpen: !this.state.isNavBarOpen });
  };
  closeNavBar = () => {
    this.setState({ isNavBarOpen: false });
  };
  render() {
    return (
      <div className="w3-top navBar">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <Link to="/">
            <div className="w3-bar-item w3-button">
              <img
                className="logo"
                src="https://s3.ap-south-1.amazonaws.com/145east.com-files/images/static/logo.jpg"
                alt="145East Logo"
              />{" "}
              <span className="w3-text-large">Admin Panel</span>
            </div>
          </Link>
          <div className="w3-right w3-hide-large w3-xlarge">
            <i
              className="fa fa-bars"
              onClick={this.handleOpenNavbarOptions}
              aria-hidden="true"
            ></i>
          </div>
          <div
            className={`mobileNavbarContainer ${
              !this.state.isNavBarOpen && "w3-hide"
            }`}
          >
            <Link to="/products">
              <div onClick={this.closeNavBar} className="navBaarIitem">
                Products
              </div>
            </Link>
            <Link to="/orders">
              <div onClick={this.closeNavBar} className="navBaarIitem">
                Orders
              </div>
            </Link>
            <div className="navBaarIitem">Users</div>
          </div>
          <div className="w3-right w3-hide-small">
            <a href="#projects" className="w3-bar-item w3-button">
              Projects
            </a>
            <a href="#about" className="w3-bar-item w3-button">
              About
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
