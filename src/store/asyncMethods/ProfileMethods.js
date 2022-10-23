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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updatename', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            // console.log(error.response);
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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updatepassword', userData, config);
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_PASSWORD_UPDATE_ERRORS, payload: error.response.data.errors });
            console.log(error.response);
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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updateabout', user, config);
            dispatch({ type: CLOSE_LOADER });
            // localStorage.setItem('myToken', data.token);
            // dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: REDIRECT_TRUE });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
           
            // console.log(data);
        } catch (error) {
            console.log(error.response);
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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updateemail', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            // console.log(error.response);
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
            const { data } = await axios.post('/=https://blog-web-mern.herokuapp.com/updateusername', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            // console.log(error.response);
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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updateprofession', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            // console.log(error.response);
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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updatephone', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            // console.log(error.response);
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
            const { data } = await axios.post('https://blog-web-mern.herokuapp.com/updateage', user, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
            dispatch({ type: REDIRECT_TRUE });
            // console.log(data);
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
            // console.log(error.response);
            dispatch({ type: SET_PROFILE_ERRORS, payload: error.response.data.errors });
        }
    }
}