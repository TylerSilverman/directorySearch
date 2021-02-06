import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import UserDetail from "./components/UserDetail" //displaying user gender
import Container from "./components/Container"; //displaying the information 
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Container size="md-12">
      <SearchForm />
      <Card>
        
      <UserDetail/>
      </Card>
      </Container>
    </div>
    
  );
}

export default App;
