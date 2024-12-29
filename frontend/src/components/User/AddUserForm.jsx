import { useState, useContext, useEffect } from "react";
import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useNavigate, Link } from "react-router-dom";

import { UserContext } from "../../store/user/UserState";

const AddUserForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Navigate back to display user page after post
  const navigate = useNavigate();

  // Input Change Handler for each input for 3 inputs)
  const inputUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const { addUser } = useContext(UserContext);

  const sumbitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      username: userName,
      email: email,
      age: Number(age),
    };

    addUser(newUser);
    setUserName("");
    setEmail("");
    setAge("");
    navigate("/display-user");
  };

  return (
    <>
      <form onSubmit={sumbitHandler}>
        <MDBRow>
          <MDBCol>
            <MDBInput
              className="mb-4"
              type="text"
              id="form2Example1"
              label="Enter username"
              required
              value={userName}
              onChange={inputUserNameHandler}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBInput
              className="mb-4"
              type="email"
              id="form2Example2"
              label="Enter email address"
              required
              value={email}
              onChange={inputEmailHandler}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              className="mb-4"
              type="number"
              id="form2Example3"
              label="Enter age"
              value={age}
              onChange={inputAgeHandler}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <button type="submit" className="btn btn-success">
              ADD USER
            </button>
          </MDBCol>
          <MDBCol>
            <Link to="/" className="btn btn-info">
              GO BACK TO HOME PAGE
            </Link>
          </MDBCol>
        </MDBRow>
      </form>
    </>
  );
};

export default AddUserForm;
