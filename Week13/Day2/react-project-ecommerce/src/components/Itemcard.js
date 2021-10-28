import React from "react";
import { Button, CardImage, CardContainer, Container, Header2, Header3 } from "./Website.Style";
import { addCart } from "../actions/AddActions";
import { connect } from "react-redux";

const Itemcard = (props) => {
const addCart = props.addCart;

  return (
    <CardContainer>

      <Container>
        <CardImage src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Pro-Max-Gold-frontimage" alt="" />
        <Header3>Gold Iphone</Header3>
        <Header2>$1,500</Header2>
        <Button onClick={() => addCart('goldIPhone')} href="#">Add to Cart</Button>
      </Container>

      <Container>
        <CardImage src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Pro-Max-Silver-frontimage" alt="" />
        <Header3>Silver Iphone</Header3>
        <Header2>$1,500</Header2>
        <Button onClick={() => addCart('silverIPhone')} href="#">Add to Cart</Button>
      </Container>

      <Container>
        <CardImage src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Pro-Max-Sierra-Blue-frontimage-1" alt="" />
        <Header3>Blue Iphone</Header3>
        <Header2>$1,500</Header2>
        <Button onClick={() => addCart('blueIPhone')} href="#">Add to Cart</Button>
      </Container>

      <Container>
        <CardImage src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13-Pro-Max/Graphite/Apple-iPhone-13-Pro-Max-Graphite-frontimage.png" alt="" />
        <Header3>Graphite Iphone</Header3>
        <Header2>$1,500</Header2>
        <Button onClick={() => addCart('graphiteIPhone')} href="#">Add to Cart</Button>
      </Container>
    <h1>Current number </h1>
    </CardContainer>
  );
}

export default connect(null, { addCart }) (Itemcard);