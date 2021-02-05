import React from "react";
import "../styles/Header.css";
// import React, { Component } from "react";
import Container from "./Container";
import SearchForm from "./SearchForm";
import API from "../utils/API";


const styles = {
  headerStyle: {
    background: "gray"
  },
  headingStyle: {
    fontSize: 50
  }
};


function Section() {
  return (
    <header style={styles.headerStyle} className="Section">
      <br></br><br></br>
      <Container/> 
      <SearchForm/>
    </header>
  );
}

export default Section;
