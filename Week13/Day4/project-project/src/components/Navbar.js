import React from "react";
import { Link } from "react-router-dom";
import {
    Linked,
  NavContainer,
  Navigation,
  Navlist,
  UnOrderedList,
} from "../styled-components/Website.Style";

export default function Navbar() {
  return (
    <NavContainer>
      <Navigation>
        <UnOrderedList>
          <Navlist>
            <Link to="/">Home</Link>
          </Navlist>
          <Navlist>
            <Link to="/cart">Cart</Link>
          </Navlist>
        </UnOrderedList>
      </Navigation>
    </NavContainer>
  );
}
