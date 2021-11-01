import React from "react";
import { FooterContainer } from "./Style";
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
