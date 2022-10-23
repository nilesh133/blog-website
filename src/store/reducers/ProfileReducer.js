import {SET_PROFILE_ERRORS, RESET_PROFILE_ERRORS, SET_PASSWORD_UPDATE_ERRORS, RESET_PASSWORD_UPDATE_ERRORS, UPDATE_ABOUT_REQUEST, UPDATE_ABOUT_RESET, SET_ABOUT_UPDATE_ERRORS, RESET_ABOUT_UPDATE_ERRORS} from "../types/ProfileTypes";

const initState = {
    updateErrors: [],
    updatePasswordErrors: [],
    updateAboutErrors: [],
    userUpdateStatus: false
}

export const UpdateName = (state = initState, action) => {
    const {type, payload} = action;
    if(type === SET_PROFILE_ERRORS){
        return {...state, updateErrors: payload}
    }
    else if(type === RESET_PROFILE_ERRORS){
        return {...state, updateErrors: []}
    }
    else{
        return state;
    }
}

export const UpdatePassword = (state = initState, action) => {
    const {type, payload} = action;
    if(type === SET_PASSWORD_UPDATE_ERRORS){
        return {...state, updatePasswordErrors: payload}
    }
    else if(type === RESET_PASSWORD_UPDATE_ERRORS){
        return {...state, updatePasswordErrors: []}
    }
    else{
        return state;
    }
}

export const UpdateAbout = (state = initState, action) => {
    const {type, payload} = action;
    if(type === SET_ABOUT_UPDATE_ERRORS){
        return {...state, updateAboutErrors: payload}
    }
    else if (type === UPDATE_ABOUT_REQUEST) {
        return { ...state, userUpdateStatus: true };
    }
    else if (type === UPDATE_ABOUT_RESET) {
        return { ...state, userUpdateStatus: false };
    }
    else if(type === RESET_ABOUT_UPDATE_ERRORS){
        return {...state, updateAboutErrors: []}
    }
    else{
        return state;
    }
}