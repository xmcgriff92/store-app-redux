import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TableDiv } from './Style';

export default function Basket() {
    const basketFiller = useSelector(store => store.basketReducer)
    const tableBody = basketFiller.basketProducts.map((product) => {

        return <tr>
            <td></td>
            <td></td>
            <button>DELETE</button>
        </tr>
    })


    return (
        <TableDiv className="row align-items-center">
            <table className="table table-dark table-bordered col-md-8 mt-8">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        </TableDiv>
    )
}
