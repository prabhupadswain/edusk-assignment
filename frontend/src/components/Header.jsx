import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

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

  const linkClass = () => {
    // console.log(isActive);
  };
  return (
    // <header>
    //   <h1 className='display-2 mb-5' style={{ textAlign: 'center' }}>
    //     User DBMS Application
    //   </h1>
    // </header>
    <header>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer>
          <NavLink to="/">
            <MDBIcon fas icon="university" size="lg" />
          </NavLink>
          {/* <MDBNavbarBrand>
            
          </MDBNavbarBrand> */}
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
              <MDBNavbarItem>
                <NavLink to="/display-user" className={linkClass}>
                  User Profiles
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/add-user" className={linkClass}>
                  Add User
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <h1 className="p-3 text-center bg-secondary">User Profile Manager</h1>
    </header>
  );
};

export default Header;
