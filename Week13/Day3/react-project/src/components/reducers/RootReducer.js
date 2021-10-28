import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import itemsReducer from './ItemsReducer'

const rootreducer = combineReducers({

    itemsReducer : itemsReducer,
    cartReduceer : cartReducer

})