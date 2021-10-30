import React from 'react'

export default function Product({product}) {
    return (
        <div>
            <h1>{product.productName}</h1>
            <img src={product.productImage} className="img-fluid" alt=""/>
            <h2>{product.productPrice}</h2>
        </div>
    )
}
