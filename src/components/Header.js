import React from "react";
import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "gray"
  },
  headingStyle: {
    fontSize: 50
  }
};


function Header() {
  console.log("header component")
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>User Directory</h1>
    </header>
  );
}

export default Header;
