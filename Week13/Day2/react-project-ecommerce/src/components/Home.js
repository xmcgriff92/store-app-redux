import React, { useState } from 'react';
import Itemcard from './Itemcard';

export default function Home() {
    const [cartNumber, setcartNumber] = useState(0);

    const addToCart = () => {
        setcartNumber(cartNumber + 1);
    }


    return (
        <div>
            <Itemcard addToCart={addToCart} cartNumber={cartNumber}/>
        </div>
    )
}
