import React from "react";
import Search from "./Search";
import { Container } from "./Website.Style";

export default function MovieResults() {
  return (
    <div>
      <Container>
        <h1>Movie Results</h1>
        <Search/>
      </Container>
    </div>
  );
}
