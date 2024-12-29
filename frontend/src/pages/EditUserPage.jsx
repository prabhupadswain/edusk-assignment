import { MDBContainer } from "mdb-react-ui-kit";

import EditUserForm from "../components/User/EditUserForm";
import AddUserForm from "../components/User/EditUserForm";

const EditUserPage = () => {
  return (
    <main>
      <MDBContainer>
        <h3>Edit User Page</h3>
        <section>
          <EditUserForm />
        </section>
      </MDBContainer>
    </main>
  );
};

export default EditUserPage;
