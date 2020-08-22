import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "../../App/App.css";
import { NavLink } from "react-router-dom";
const SiteNav = () => {
  return (
    <div>
      <Navbar fixed="top" className="nav" variant="dark">
        <Container className="pt-3">
          <Nav.Link className="logo" href="#home"></Nav.Link>

          <Nav className="m-auto navItem">
            <NavLink exact to="/">
              <span className="navItem ml-5 mr-5">FEED</span>
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/home"
            >
              <span className="navItem ml-5 mr-5">RESTAURANT</span>
            </NavLink>
            <NavLink exact to="/">
              <span className="navItem ml-5 mr-5">HOME</span>
            </NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="button-font" variant="outline-light">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default SiteNav;
