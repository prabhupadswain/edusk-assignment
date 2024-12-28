import { useState } from "react";
// import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    // <header>
    //   <h1 className='display-2 mb-5' style={{ textAlign: 'center' }}>
    //     User DBMS Application
    //   </h1>
    // </header>
    <header>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer>
          <MDBNavbarBrand href="#">User Profile Manager</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNav} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarLink href="#">User Profiles</MDBNavbarLink>
              <MDBNavbarLink href="#">Add User</MDBNavbarLink>
              <MDBNavbarLink href="#">Edit User</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <h1 className="p-3 text-center bg-secondary">User Profile Manager</h1>
    </header>
  );
};

export default Header;
