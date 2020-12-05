import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/type";

const initialState = {
    cartNumber: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                cartNumber: state.cartNumber + 1
            }
        case GET_NUMBERS_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}