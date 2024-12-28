import { MDBContainer } from "mdb-react-ui-kit";
import AddUserForm from "../components/User/AddUserForm";

const AddUserPage = () => {
  return (
    <main>
      <MDBContainer>
        <h3>Add User Page</h3>
        <section>
          <AddUserForm />
        </section>
      </MDBContainer>
    </main>
  );
};

export default AddUserPage;
