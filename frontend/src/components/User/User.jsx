import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const User = ({ data }) => {
  return (
    <MDBCard className="mb-3">
      <MDBCardBody>
        <MDBCardTitle tag="h5">{data.username}</MDBCardTitle>
        <MDBCardSubTitle tag="h6" className="text-muted">
          {data.email}
        </MDBCardSubTitle>
        <MDBCardText className="mt-2">
          Hello, I am {data.age} year old freelance software engineer. Contact
          me over email for services.
        </MDBCardText>
        <Link to={`/edit-user/${data.id}`}>
          <MDBIcon fas icon="edit" /> &nbsp;Edit
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

export default User;
