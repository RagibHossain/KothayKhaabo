import React from "react";
import {Navbar, Nav, Form, FormControl, Button, Container, Image} from "react-bootstrap"
import "../../App/App.css"
const SiteNav = () => {
  return (
    <div>
      <Navbar  className="nav" variant="dark">
          <Container className="pt-3">
          <Nav.Link className="logo" href="#home"></Nav.Link>
           
        <Nav className="m-auto navItem">
          <Nav.Link className="ml-5 mr-5 navItem" href="#home">FEED</Nav.Link>
          <Nav.Link className="ml-5 mr-5 navItem" href="#features">RESTAURANTS</Nav.Link>
          <Nav.Link className="ml-5 mr-5 navItem" href="#pricing">HOME</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="button-font" variant="outline-light">Search</Button>
        </Form>
          </Container>
   
      
      </Navbar>
 
    </div>
  );
};

export default SiteNav;
