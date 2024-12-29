import { useContext, useEffect } from "react";

import { UserContext } from "../../store/user/UserState.jsx";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import User from "./User.jsx";

// import users from "../../data.json";

const UsersList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  const listUsers = users.map((singleUser) => (
    <MDBCol key={singleUser.id} md="6">
      <User data={singleUser} />
    </MDBCol>
  ));

  return (
    <>
      <MDBContainer>
        <MDBRow>{listUsers}</MDBRow>
      </MDBContainer>
    </>
  );
};

export default UsersList;
