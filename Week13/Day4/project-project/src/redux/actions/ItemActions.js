import { actionTypes } from "../constants/ActionTypes";

export const placeItems = (items) => {
    return {
        type: actionTypes.PLACE_ITEMS,
        payload: items
    }
};

export const chosenItems = (items) => {
    return {
        type: actionTypes.CHOSEN_ITEMS,
        payload: items
    }
};

// export const deleteItems = (items) => {
//     return {
//         type: actionTypes.DELETE_CHOSEN_ITEMS,
//         payload: items
//     }
// };