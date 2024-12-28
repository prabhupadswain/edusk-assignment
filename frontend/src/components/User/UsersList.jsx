import users from "../../data.json";

import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import User from "./User.jsx";

const UsersList = () => {
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
