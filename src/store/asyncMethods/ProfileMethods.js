import axios from "axios";
import { SET_LOADER, CLOSE_LOADER, REDIRECT_TRUE, SET_MESSAGE } from "../types/PostTypes";
import { SET_PROFILE_ERRORS, RESET_PROFILE_ERRORS, SET_PASSWORD_UPDATE_ERRORS, SET_ABOUT_UPDATE_ERRORS } from "../types/ProfileTypes";
import { SET_TOKEN } from "../types/UserTypes";
export const updateNameAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updatename', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}

export const updatePasswordAction = (userData) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER })
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updatepassword', userData, config);
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PASSWORD_UPDATE_ERRORS, payload: error.response.data.errors });
        }
    }
}

export const updateAboutAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updateabout', user, config);
            dispatch({ type: CLOSE_LOADER });
            // localStorage.setItem('myToken', data.token);
            // dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: REDIRECT_TRUE });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
           
        } catch (error) {
            dispatch({ type: SET_ABOUT_UPDATE_ERRORS, payload: error.response.data.errors });
            dispatch({ type: CLOSE_LOADER });
        }
    }
}

export const updateEmailAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updateemail', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}

export const updateUsernameAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updateusername', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}

export const updateProfessionAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updateprofession', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}

export const updatePhoneAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updatephone', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}

export const updateAgeAction = (user) => {
    return async (dispatch, getState) => {

        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updateage', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}