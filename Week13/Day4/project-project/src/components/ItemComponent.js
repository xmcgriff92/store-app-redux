import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { GridContainer } from "../styled-components/Website.Style";

// const URL = "https://fakestoreapi.com/products";

export default function ItemComponent() {
  const items = useSelector((state) => state.allItems.items);
  const mapItems = items.map((item) => {
    return (
     
        <GridContainer>
          <Card style={{ width: "18rem", height: "8rem" }}>
            <Card.Img style= {{height: "250px"}} variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Card.Text>{item.category}</Card.Text>
            </Card.Body>
          </Card>
        </GridContainer>
      
    );
  });

  return <>{mapItems}</>;
}
