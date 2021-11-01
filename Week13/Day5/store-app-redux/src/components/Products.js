import React from 'react';
import { useSelector } from 'react-redux';
import Carouselll from './Carouselll';
import Product from './Product';



export default function Products() {
const productFiller = useSelector(store => store.productsReducer)
const productsList = productFiller.products;
const productData = productsList.map((product) => {

    return <div className="col-md-4">
        <Product product={product}/>
    </div>
    
})


    return (
        <div className="container">
            <div className="row">
            <Carouselll/>
                {productData}
            </div>
        </div>
    )
}
