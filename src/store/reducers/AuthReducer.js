import jwt_decode from "jwt-decode";
import {SET_LOADER, CLOSE_LOADER, SET_TOKEN, REGISTER_ERRORS, LOGOUT, LOGIN_ERRORS, SET_LOGIN_MESSAGE, RESET_LOGIN_MESSAGE} from "../types/UserTypes";

const initState = {
    loading: false,
    registerErrors: [],
    loginErrors: [],
    token: '',
    user: '',
    message: '',

}

const verifyToken = (token) => {
    const decodeToken = jwt_decode(token);
    const expiresIn = new Date(decodeToken.exp * 1000);
    if(new Date() > expiresIn){
        localStorage.removeItem('myToken');
        return null;
    }
    else{
        return decodeToken;
    }
}

const token = localStorage.getItem('myToken');
if(token){
    const decoded = verifyToken(token);
    if(decoded){
        initState.token = token;
        const{user} = decoded;
        initState.user = user;
    }
}
const AuthReducer = (state = initState, action) => {
    if(action.type === SET_LOADER){
        return {...state, loading: true}
    }
    else if(action.type === CLOSE_LOADER){
        return {...state, loading: false}
    }
    else if(action.type === REGISTER_ERRORS){
        return {...state, registerErrors: action.payload}
    }
    else if(action.type === SET_TOKEN){
        const decoded = verifyToken(action.payload);
        const{user} = decoded;
        return {...state, token: action.payload, user: user, registerErrors: [], loginErrors: []}
    }
    else if(action.type === LOGOUT){
        return {...state, token: '', user: ''}
    }
    else if(action.type === LOGIN_ERRORS){
        return {...state, loginErrors: action.payload}
    }
    else if(action.type === SET_LOGIN_MESSAGE){
        return {...state, message: action.payload}
    }
    else if(action.type === RESET_LOGIN_MESSAGE){
        return {...state, message: ''}
    }
    else{
        return state;
    }
}

export default AuthReducer;