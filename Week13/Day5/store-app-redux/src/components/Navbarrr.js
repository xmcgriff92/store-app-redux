import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5"

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
              <Nav.Link as={Link} to={"/"}><IoHomeOutline/></Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} as={Link} to={"/basket"}>
                <BsCart3/> Cart ({basketFiller.basketProducts.length})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
