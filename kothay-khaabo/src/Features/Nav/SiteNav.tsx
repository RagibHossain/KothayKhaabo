import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
} from "react-bootstrap";
import "../../App/App.css";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { userStoreContext } from "../../Common/Stores/userStore";
const SiteNav = () => {
  const {logout} = useContext(userStoreContext);
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
          
            <Button onClick={logout} className="button-font" variant="outline-light">
              Logout
            </Button>
         
        </Container>
      </Navbar>
    </div>
  );
};

export default observer(SiteNav);
