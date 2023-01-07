import axios from "axios";
import {
    CREATE_ERRORS,
    REMOVE_ERRORS,
    SET_LOADER,
    CLOSE_LOADER,
    REDIRECT_TRUE,
    REDIRECT_FALSE,
    SET_MESSAGE,
    REMOVE_MESSAGE,
    SET_POSTS,
    SET_POST,
    POST_REQUEST,
    SET_UPDATE_ERRORS,
    UPDATE_IMAGE_ERROR,
    SET_HOME_POSTS,
    SET_DETAIL_VIEW
} from "../types/PostTypes";

export const createAction = (postData) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post("https://blog-website-server-nilesh133.vercel.app/createpost", postData, config);
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: REDIRECT_TRUE });
            dispatch({ type: SET_MESSAGE, payload: data.msg });
        } catch (error) {
            const { response: { data: { errors } } } = error;
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_UPDATE_ERRORS, payload: errors });
        }
    }
}

export const fetchPosts = (id, page) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();
        dispatch({ type: SET_LOADER });
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            const { data: { response, count, perPage } } = await axios.get(`https://blog-website-server-nilesh133.vercel.app/posts/${id}/${page}`, config);

            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_POSTS, payload: { response, count, perPage } });
        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
        }
    }
}

export const fetchPost = (id) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        dispatch({ type: SET_LOADER });
        try {
            const { data: { post } } = await axios.get(`https://blog-website-server-nilesh133.vercel.app/post/${id}`, config);
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_POST, payload: post });
            dispatch({ type: POST_REQUEST });

        } catch (error) {
            dispatch({ type: CLOSE_LOADER });
        }
    }
}

export const updateAction = (updatedPost) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        dispatch({ type: SET_LOADER });
        try {
            const { data } = await axios.post('https://blog-website-server-nilesh133.vercel.app/editpost', updatedPost, config);
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: REDIRECT_TRUE });
            dispatch({ type: SET_MESSAGE, payload: data.msg });

        } catch (error) {
            const { response: { data: { errors } } } = error;
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: SET_UPDATE_ERRORS, payload: errors });
        }
    }
}

export const updateImageAction = (updatedImage) => {
    return async (dispatch, getState) => {
        const { AuthReducer: { token } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        dispatch({ type: SET_LOADER });
        try {
            const { data: {msg} } = await axios.post('https://blog-website-server-nilesh133.vercel.app/updateImage', updatedImage, config);
            dispatch({ type: CLOSE_LOADER });
            dispatch({type: REDIRECT_TRUE});
            dispatch({type: SET_MESSAGE, payload: msg})
        } catch (error) {
            const {response: {data: {errors}}} = error;
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: UPDATE_IMAGE_ERROR,  payload: errors});
        }
    }
}

export const homeTestingPosts = () => {
    return async(dispatch) => {
        dispatch({type: SET_LOADER});
        try{
            const{data} = await axios.get("https://blog-website-server-nilesh133.vercel.app/homeTesting");
            dispatch({type: SET_HOME_POSTS, payload: data});
            dispatch({type: CLOSE_LOADER});
        }
        catch(error){
            dispatch({type: CLOSE_LOADER});
        }
    }
}

export const postDetailView = (id) => {
    return async(dispatch) => {
        dispatch({type: SET_LOADER});
        try{
            const{data: {post}} = await axios.get(`https://blog-website-server-nilesh133.vercel.app/postview/${id}`);
            dispatch({type: SET_DETAIL_VIEW, payload: post});
            dispatch({type: CLOSE_LOADER});
        }
        catch(error){
            dispatch({type: CLOSE_LOADER});
        }
    }
}