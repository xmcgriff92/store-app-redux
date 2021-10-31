import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BasketImg, BasketButton } from "./Style";

export default function BasketProduct() {
  const basketFiller = useSelector((store) => store.basketReducer);
  const tableBody = basketFiller.basketProducts.map((product) => {
    return (
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-md-4">
        <div class="col"><BasketImg src={product.productImage}/></div>
          <div class="col">{product.productName}</div>
          <div class="col">{product.productPrice}</div>
        <BasketButton className="btn btn-dark">DELETE</BasketButton>
        </div>
      </div>
    );
  });

  return <div>
      <div>{tableBody}</div>
  </div>;
}
