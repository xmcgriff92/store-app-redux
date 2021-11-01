import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BasketImg, BasketButton, TableT } from "./Style";
import { BsTrash } from 'react-icons/bs';

export default function BasketProduct() {
  const basketFiller = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();
  const productBody = basketFiller.basketProducts.map((product) => {
    return (

        <tr>
            <td><BasketImg src={product.productImage}/>{product.productName}</td>
            <td>{product.productPrice}</td>
            <BasketButton 
            onClick={() => dispatch({type: "DELETE_PRODUCT_FROM_BASKET", payload: product})} 
            className="btn btn-dark"><BsTrash/></BasketButton>
        </tr>
    //   <div class="container">
    //     <div class="row row-cols-1 row-cols-md-2 row-cols-md-4">
    //       <div class="col"><BasketImg src={product.productImage}/>{product.productName}</div>
    //       <div class="col">{product.productPrice}</div>
    //     <BasketButton className="btn btn-dark">DELETE</BasketButton>
    //     </div>
    //   </div>
    );
  });


  return <div className="row justify-content-center">
      <TableT>
          <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Remove</th>
            </tr>
          </thead>
            {productBody}
          <tbody>

          </tbody>
      </TableT>
      
  </div>;
}
