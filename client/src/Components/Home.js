import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Forms from "./Form";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

const Home = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">
          <NavbarBrand href="/" className="logo">
            YOUR SCHEDULE APP
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownMenu right></DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <Link to="/Sigin" className="nav-link">
              Manage your tasks!
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Home;
