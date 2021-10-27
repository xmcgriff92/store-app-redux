import { ADD_ITEM_CART } from "./Types";

export const addCart = () => {
    return (dispatch) => {
        console.log("you clicked");
        dispatch({
            type: ADD_ITEM_CART
        });
    }
}