import React, { useEffect } from "react";
import {
  Anchor,
  Header2,
  ListItems,
  NavHeader,
  Navigation,
  Overlay,
  UnorderedList,
} from "./Website.Style";
import { connect } from "react-redux";
import { getNumbers } from "../actions/GetAction";

const Navbar = (props) => {
    
useEffect(() => {
    getNumbers();
}, [])

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
              <Anchor href="#">Cart<span> ({props.cartProps.cartNumbers})</span></Anchor>
            </ListItems>
          </UnorderedList>
        </Navigation>
      </NavHeader>
    </div>
  );
}

const mapStateProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateProps, { getNumbers }) (Navbar);