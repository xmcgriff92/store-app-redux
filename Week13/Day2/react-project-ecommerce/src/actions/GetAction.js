import { GET_NUMBERS_CART } from "./Types";

export const getNumbers = () => {
    return (dispatch) => {
        console.log("Getting all numbers");
        dispatch({
            type: GET_NUMBERS_CART
        });
    }
}