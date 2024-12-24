import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
const Hero = () => {
  return (
    <main>
      <section className="mb-4">
        <Container className="d-flex justify-content-center">
          <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
            <h3 className="fw-normal">
              Welcome to User Profile Management System Application !!!
            </h3>
            <p className="lead">
              This is our homepage
              <br />
              Use above navigation buttons to navigate to pages to do the
              following tasks in our application.
              <br />
            </p>
            <ol>
              <li>Add a new user to our application</li>
              <li>Retrieve all users from our application server</li>
              <li>Edit an user who is already present in our application</li>
            </ol>
          </Card>
        </Container>
        {/* <h3 className="fw-normal">
          Welcome to User Profile Management System Application !!!
        </h3>
        <p className="lead">
          This is our homepage
          <br />
          Use above navigation buttons to navigate to pages to do the following
          tasks in our application.
          <br />
        </p> */}
        {/* <ol>
          <li>Add a new user to our application</li>
          <li>Retrieve all users from our application server</li>
          <li>Edit an user who is already present in our application</li>
        </ol> */}
      </section>
    </main>
  );
};

export default Hero;
