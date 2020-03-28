import { INCREMENT_COUNTER , DECREMENT_COUNTER } from '../actions/types';

export const counterIncrement = () =>{
    return{
        type : INCREMENT_COUNTER
    };
}
export const counterDecrement = () =>{
    return{
        type : DECREMENT_COUNTER
    };
}