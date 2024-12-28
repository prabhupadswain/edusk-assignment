import { useState } from "react";
import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";

const AddUserForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const inputUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const resetHandler = () => {
    console.log("RESET");
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      userName,
      email,
      age,
    };

    console.log(newUser);
    setUserName("");
    setEmail("");
    setAge("");
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

        <MDBRow className="mb-4">
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
            <button
              type="reset"
              className="btn btn-info"
              onClick={resetHandler}
            >
              RESET FORM
            </button>
          </MDBCol>
        </MDBRow>
      </form>
    </>
  );
};

export default AddUserForm;
