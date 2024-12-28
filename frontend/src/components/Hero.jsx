import React from "react";
import { MDBContainer, MDBCard } from "mdb-react-ui-kit";

const Hero = () => {
  const myStyles = {
    backgroundColor: "#FAFAFA",
  };

  return (
    <section>
      <MDBContainer className="d-flex justify-content-center">
        <MDBCard
          className="p-5 w-75 d-flex flex-column align-items-center"
          style={myStyles}
        >
          <h3 className="fw-normal">
            Welcome to User Profile Management System Application !!!
          </h3>
          <p className="lead">This is our homepage !</p>
          <div>
            <p>
              {" "}
              Use the above navigation buttons to navigate to pages to do the
              following tasks in our application.
            </p>
            <ol>
              <li>Add a new user to our application</li>
              <li>Retrieve all users from our application server</li>
              <li>Edit an user who is already present in our application</li>
            </ol>
          </div>
        </MDBCard>
      </MDBContainer>
    </section>
  );
};

export default Hero;
