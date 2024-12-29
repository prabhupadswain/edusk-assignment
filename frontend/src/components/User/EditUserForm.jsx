import { useState } from "react";
import { MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const EditUserForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
  });

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(user);

    setUser({
      username: "",
      email: "",
      age: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <MDBInput
        className="mb-4"
        type="text"
        id="uname"
        label="Enter username"
        required
        name="username"
        value={user.username}
        onChange={changeHandler}
      />
      <MDBRow>
        <MDBCol>
          <MDBInput
            className="mb-4"
            type="email"
            id="email"
            label="Please, enter an email different from the previous one"
            required
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            className="mb-4"
            type="number"
            id="age"
            label="Enter age"
            name="age"
            value={user.age}
            onChange={changeHandler}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <button type="submit" className="btn btn-success">
            EDIT USER
          </button>
        </MDBCol>
        <MDBCol>
          <Link to="/display-user" className="btn btn-secondary">
            GO BACK TO USER PROFILES
          </Link>
        </MDBCol>
      </MDBRow>
    </form>
  );
};

export default EditUserForm;
