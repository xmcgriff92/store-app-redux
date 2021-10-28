import React from "react";
import { HeadlineContainer, Container } from "./Website.Style";

export default function Headline() {
  return (
    <Container>
      <HeadlineContainer>
        <h1 className="display-4 text-center">Headline</h1>
        <p className="lead">This is a simple hero unit</p>
      </HeadlineContainer>
    </Container>
  );
}
