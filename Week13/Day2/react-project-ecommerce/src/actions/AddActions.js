import { ADD_ITEM_CART } from "./Types";

export const addCart = (itemName) => {
    return (dispatch) => {
        console.log("Adding to cart");
        console.log("Item: ", itemName);
        dispatch({
            type: ADD_ITEM_CART,
            payload: itemName
        });
    }
}