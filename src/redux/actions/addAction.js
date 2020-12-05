import { ADD_PRODUCT_CART} from './type'

export const addCart = () => {
    return (dispatch) => {
        console.log('add cart')
        dispatch({
            type: ADD_PRODUCT_CART
        })
    }
}