import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';


export default function Products() {
const productFiller = useSelector(store => store.productsReducer)
const productsList = productFiller.products;
const productData = productsList.map((product) => {

    return <div>
        <Product product={product}/>
    </div>
    
})


    return (
        <div className="container">
            <h1>ITEMS {productFiller.products.length}</h1>
            <div className="row">
                {productData}
            </div>
        </div>
    )
}
