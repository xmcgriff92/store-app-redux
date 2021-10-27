import React from "react";
import {
  Anchor,
  Header2,
  ListItems,
  NavHeader,
  Navigation,
  Overlay,
  UnorderedList,
} from "./Website.Style";

export default function Navbar() {
  return (
    <div>
      <NavHeader>
        <Overlay></Overlay>
        <Navigation>
          <Header2>Shop</Header2>
          <UnorderedList>
            <ListItems>
              <Anchor href="#">Home</Anchor>
            </ListItems>
            <ListItems>
              <Anchor href="#">About</Anchor>
            </ListItems>
            <ListItems>
              <Anchor href="#">Cart<span> 0</span></Anchor>
            </ListItems>
          </UnorderedList>
        </Navigation>
      </NavHeader>
    </div>
  );
}
