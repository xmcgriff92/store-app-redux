import React from 'react'

export default function Product({product}) {
    return (
        <div>
            <h1>{product.productName}</h1>
            <img src={product.productImage} className="img-fluid" alt=""/>
            <h5>Price: {product.productPrice}</h5>
            <button>ADD TO CART</button>
        </div>
    )
}
