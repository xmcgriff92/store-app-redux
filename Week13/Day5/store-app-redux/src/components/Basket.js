import React from "react";
import BasketProduct from "./BasketProduct";
import { BasketDiv } from "./Style";

export default function Basket() {
  return (
    <div>
      <BasketDiv className="container">
      </BasketDiv>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <BasketProduct />
      </div>
    </div>
  );
}
