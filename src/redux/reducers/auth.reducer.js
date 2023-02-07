import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType";

const intialState = {
    accessToken: localStorage.getItem('accessToken'),
    user: localStorage.getItem('profileData'),
    loading: false
}


export const authReducer = (prevState = intialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_REQUEST: 
            return {...prevState, loading: true}

        case LOGIN_SUCCESS: 
            return {
                ...prevState, 
                accessToken: payload,
            loading: false}

        case LOGIN_FAILED: 
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: payload
            }

        case LOAD_PROFILE: 
            return {
                ...prevState,
                user: payload
            }
        

        case LOG_OUT:
            return {
                ...prevState,
                accessToken: null,
                user: null
            }

        default:
            return prevState
    }
}