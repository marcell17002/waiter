// import { ADD_TO_CART } from './types';

// export const addToCart= (id)=>{
//     return{
//         type: ADD_TO_CART,
//          id }
//     }
// app/redux/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './types';
export const addToCart = (item) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}
export const removeItem = (item) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
}
export const emptyCart = () => dispatch => {
    dispatch({
        type: EMPTY_CART
    })
}