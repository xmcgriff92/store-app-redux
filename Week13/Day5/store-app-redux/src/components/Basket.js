import React from "react";
import BasketProduct from "./BasketProduct";

export default function Basket() {
  return (
    <div>
        <h1>Basket</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 dark">
          <div className="col"></div>
          <div className="col">Name</div>
          <div className="col">Price</div>
          <div className="col">Action</div>
        </div>
      </div>
      <div>
        <BasketProduct />
      </div>
    </div>
  );
}
