import { useState, useContext } from "react";
import { MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link, useParams, useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user/UserState";

const EditUserForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
  });

  // 1. Navigate and
  // 2. Retrieve User ID from URL Param
  // console.log(useParams());

  const navigate = useNavigate();
  const { id } = useParams();

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // Context
  const { editUser } = useContext(UserContext);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(`User ID:${id}`);
    // console.log(user);

    const newUserToUpdate = {
      ...user,
      age: Number(user.age),
    };

    editUser(id, newUserToUpdate);

    setUser({
      username: "",
      email: "",
      age: "",
    });

    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <MDBInput
        className="mb-4"
        type="text"
        id="uname"
        label="Enter username. New username can be same or different from old one. Not blank"
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
            label="New email has to be different from old one, valid & not blank"
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
