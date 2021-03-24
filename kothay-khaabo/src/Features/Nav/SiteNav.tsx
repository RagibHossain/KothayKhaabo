import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "../../App/App.css";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { rootStoreContext } from "../../Common/Stores/rootStore";
const SiteNav = () => {
  const rootStore = useContext(rootStoreContext);
  const { logout ,setColor} = rootStore.userStore;
  const { token } = rootStore.userStore;
  const jwt = token ? token : window.localStorage.getItem("token");
  return (
    <div>
      <Navbar fixed="top" className="nav" variant="dark">
        <Container className="pt-3">
          <Nav.Link className="logo" href="#home"></Nav.Link>

          <Nav className="m-auto">
  
            <NavLink className="navlink" to="/home" exact >
              <span className="navItem ml-5 mr-5">RESTAURANTS</span>
            </NavLink>
            <NavLink className="navlink" exact to="/">
              <span className="navItem ml-5 mr-5">Home</span>
            </NavLink>
          </Nav>
          {jwt ? (
            <Button
              onClick={logout}
              className="button-font"
              variant="outline-light"
            >
              Logout
            </Button>
          ) : (
            <NavLink className="navlink" exact to="/GetAccess">
              <span className="navItem ml-5 mr-5">Signin/Signup</span>
            </NavLink>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default observer(SiteNav);
