import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero>
        <h1>User Directory</h1>
        <h2>Home Page</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              You can navigate through the navbar to the About and Search Pages.
            </p>
            <p>
             Coming Soon Updates will be to add and delete users
            </p>
            <p>
             Please email if you have any questions or want to add to this app. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
