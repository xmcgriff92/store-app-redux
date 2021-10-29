import React from 'react';
import { useEffect } from "react";
import axios from 'axios';
import { placeItems } from "../redux/actions/ItemActions";
import { useDispatch,useSelector } from 'react-redux'
import ItemComponent from './ItemComponent';

export default function ItemListing() {

const items = useSelector((state) => state);

const dispatch = useDispatch()

const getItems = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) =>{
        console.log("Err", err);
    });
    dispatch(placeItems(response.data));
};

useEffect(() => {
    getItems();
}, []);
console.log(items)

    return (
        <div>
           <ItemComponent/>
        </div>
    )
}
