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
            <NavItem>
              <NavLink href="https://github.com/JessicaHidalgo">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Schedule
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/Search">
                  <DropdownItem>List</DropdownItem>
                </Link>
                <Link to="/Add">
                  <DropdownItem>Add</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <Link to="/Sigin" className="nav-link">
              Sign In
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Home;
