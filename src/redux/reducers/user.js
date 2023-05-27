import { STORE_USER } from '../constant';

const initState = {id: null, name: null};
export default function userReducer(preState = initState, action){
    const {type, data} = action;
    switch(type){
        case STORE_USER:
            return data
        default:
            return preState
    }
}