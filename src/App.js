import React from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Products } from "./Products/Products";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: "80px" }}>
        <Products />
      </div>
    </div>
  );
}

export default App;
