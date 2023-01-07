import axios from "axios";
import {SET_LOADER, CLOSE_LOADER, SET_TOKEN, REGISTER_ERRORS, LOGIN_ERRORS, SET_LOGIN_MESSAGE} from "../types/UserTypes";
export const postRegister =  (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
        };
        dispatch({ type: SET_LOADER});
        try{
            const {data} = await axios.post("https://blog-website-server-nilesh133.vercel.app/register", state, config);
            dispatch({ type: CLOSE_LOADER});
            localStorage.setItem('myToken', data.token);
            dispatch({type: SET_TOKEN, payload: data.token})
        } catch(err){
            dispatch({ type: CLOSE_LOADER});
            dispatch({ type: REGISTER_ERRORS, payload: err.response.data.errors});
        }
    }
}

export const postLogin = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            dispatch({ type: SET_LOADER});
            
            const {data} = await axios.post("https://blog-website-server-nilesh133.vercel.app/login", state, config);
            dispatch({ type: SET_LOGIN_MESSAGE, payload: data.msg });
            dispatch({ type: CLOSE_LOADER});
            localStorage.setItem('myToken', data.token);
            dispatch({type: SET_TOKEN, payload: data.token});
            
        } catch (error) {
            dispatch({ type: CLOSE_LOADER});
            dispatch({ type: LOGIN_ERRORS, payload: error.response.data.errors});
            
        }
    }
}