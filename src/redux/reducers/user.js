import { REMOVE_USER, STORE_USER } from '../constant';

const initState = {id: null, email: null};
export default function userReducer(preState = initState, action){
    const {type, data} = action;
    switch(type){
        case STORE_USER:
            return data
        case REMOVE_USER:
            return initState
        default:
            return preState
    }
}