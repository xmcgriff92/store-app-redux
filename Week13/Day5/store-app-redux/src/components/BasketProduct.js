import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BasketImg, BasketButton, Container } from "./Style";

export default function BasketProduct() {
  const basketFiller = useSelector((store) => store.basketReducer);
  const productBody = basketFiller.basketProducts.map((product) => {
    return (
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-md-4">
          <div class="col"><BasketImg src={product.productImage}/>{product.productName}</div>
          <div class="col">{product.productPrice}</div>
        <BasketButton className="btn btn-dark">DELETE</BasketButton>
        </div>
      </div>
    );
  });

  return <div>
      <Container>{productBody}</Container>
  </div>;
}
