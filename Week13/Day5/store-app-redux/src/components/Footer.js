import React from "react";
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Designed by Xavier J. McGriff</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
