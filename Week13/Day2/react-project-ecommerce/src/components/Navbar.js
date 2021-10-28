import React, { useEffect } from "react";
import {
  Header2,
  ListItems,
  NavHeader,
  Navigation,
  Overlay,
  UnorderedList,
} from "./Website.Style";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </ListItems>
            <ListItems>
              <Link to="/about">About</Link>
            </ListItems>
            <ListItems>
              <Link to="/cart">Cart<span> ({props.cartProps.cartNumbers})</span></Link>
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