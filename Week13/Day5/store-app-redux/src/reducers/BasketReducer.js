const initialState = {

    basketProducts: [],

}

export const basketReducer = (state = initialState, action) => 
{
    switch(action.type) {
        case "ADD_PRODUCT_TO_BASKET" : return {
            ...state,
            basketProducts: [...state.basketProducts, action.payload]
        }
        case "DELETE_PRODUCT_FROM_BASKET" : return {
            ...state,
            basketProducts: state.basketProducts.filter(product=>product.productName!=action.payload.productName)
        }
    }
    return state
}