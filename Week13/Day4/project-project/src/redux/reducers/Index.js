import { combineReducers } from "redux";
import { itemReducer } from "./ItemReducer";

export const reducers = combineReducers({
    allItems: itemReducer,
})
