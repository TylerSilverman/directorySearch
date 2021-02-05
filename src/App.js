import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import UserDetail from "./components/UserDetail"

function App() {

  const users =[0]

  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <UserDetail/>
    </div>
    
  );
}

export default App;
