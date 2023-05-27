import { STORE_USER } from "../constant";
export const createStoreUserAction = userObj => {
    sessionStorage.setItem('userId', userObj.id);
    sessionStorage.setItem('username', userObj.name);
    return {type: STORE_USER, data: userObj};
}