import { HOME_VIDEO_FAILED, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../actionType";

const intialState = {
    videos: [],
    loading: false,
    nextPageToken: null
}

export const homeVideoReducer = (prevState = intialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case HOME_VIDEO_REQUEST:
            return {
                ...prevState,
                loading: true 
            }

        case HOME_VIDEO_SUCCESS:
            return {
                ...prevState,
                videos: payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken
            }

        case HOME_VIDEO_FAILED:
            return {
                ...prevState,
                error: payload,
                loading: false
            }

        default:
            return prevState
    }
}