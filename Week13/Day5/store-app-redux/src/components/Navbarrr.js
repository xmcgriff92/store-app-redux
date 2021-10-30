import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { basketReducer } from "../reducers/BasketReducer";
import { Link } from "react-router-dom";

export default function Navbarrr() {
  const basketFiller = useSelector((store) => store.basketReducer);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>EZ-Electronics</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/additem"}>Add Items</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} as={Link} to={"/basket"}>
                Cart ({basketFiller.basketProducts.length})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
