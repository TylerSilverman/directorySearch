import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import UserDetail from "./components/UserDetail" //displaying user gender
import Container from "./components/Container"; //displaying the information 
import Card from "./components/Card";

function App() {

  const user =[]

  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Container size="md-12">
      <Card>
        
      <UserDetail/>
      </Card>
      </Container>
    </div>
    
  );
}

export default App;
