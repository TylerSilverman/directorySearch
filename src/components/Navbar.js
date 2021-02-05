import React from "react";
import "../styles/Navbar.css";

const styles = {
  navbarStyle: {
    background: "blue",
    justifyContent: "flex-end"
  }
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">TylerSilvermanDirectory</a>
      <a href="/">Home</a>
    </nav>
  );
}

export default Navbar;