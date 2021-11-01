import React from 'react'
import { ProductH1, ProductH4, ProductImg, ProductDiv } from './Style';
import { useDispatch } from 'react-redux';
import { BsPlusSquare } from 'react-icons/bs'

export default function Product({product}) {
    const dispatch = useDispatch();

    return (
        <ProductDiv className="shadow p-3 mb-5 bg-white rounded">
            <ProductH1>{product.productName}</ProductH1>
            <ProductImg src={product.productImage} className="img-fluid" alt=""/>
            <ProductH4>Price: {product.productPrice}</ProductH4>
            <button onClick={() => {dispatch({type: "ADD_PRODUCT_TO_BASKET", payload: product})}} className="btn btn-dark"><BsPlusSquare/> ADD TO CART</button>
        </ProductDiv>
    )
}
