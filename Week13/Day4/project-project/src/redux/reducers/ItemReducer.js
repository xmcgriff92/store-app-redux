import { actionTypes } from "../constants/ActionTypes";

const initialState = {
  items: [],
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLACE_ITEMS:
      return {...state, 
        items:action.payload
      };
    default:
      return state;
  }
};
