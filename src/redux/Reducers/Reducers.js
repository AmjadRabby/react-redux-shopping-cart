import {combineReducers} from 'redux';
import reducersCart from './ReducersCart'

export default combineReducers({
    cartState: reducersCart
});