import { GET_NUMBERS_CART } from "./type";

export const getNumbers = () => {
    return (dispatch) => {
        console.log('getting all cart Numbers');
        dispatch({
            type: GET_NUMBERS_CART
        })
    }
}