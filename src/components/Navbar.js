import React from "react";
import "../styles/Navbar.css";

const styles = {
  navbarStyle: {
    background: "brown",
    justifyContent: "flex-end"
  }
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Home</a>
    </nav>
  );
}

export default Navbar;
