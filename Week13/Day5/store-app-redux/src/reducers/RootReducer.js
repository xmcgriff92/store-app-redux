import { combineReducers } from 'redux';
import { basketReducer } from './BasketReducer';
import { productsReducer } from './ProductsReducer';

const rootReducer = combineReducers({

    productsReducer: productsReducer,
    basketReducer: basketReducer

})

export default rootReducer;