import React from "react";
import {
  Container,
  Header1,
  SearchBar,
  SearchButton,
  SearchContainer,
} from "./Website.Style";

export default function Search() {
const clickButton = () => {
    console.log("you lcicked me!")
}

  return (
    <SearchContainer>
      <Container>
          <h6>Search</h6>
        <SearchBar type="text" placeholder="Search Movie Here" />
        <SearchButton>Search</SearchButton>
      </Container>
    </SearchContainer>
  );
}
