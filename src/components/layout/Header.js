import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Todo List</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </header>
    </div>
  );
};

const headerStyle = {
  background: "#666",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
