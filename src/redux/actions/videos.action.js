import { HOME_VIDEO_FAILED, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../actionType";
import { apiRequest } from "../../api";

export const HomeVideos = () => async dispatch => {
    try {
        
        dispatch({
            type: HOME_VIDEO_REQUEST,
        });

        const res = await apiRequest.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                maxResults: 21,
                pageToken: ''
            }
        });

        // console.log('>>>> ' ,res, ' <<<<')
        // console.log('>>>> ' ,res.data.items, ' <<<<')

        dispatch({
            type: HOME_VIDEO_SUCCESS,
            payload: {
                videos: res.data.items,
                nextPageToken: res.data.nextPageToken,
            }
        });


    } catch (error) {
        dispatch({
            type: HOME_VIDEO_FAILED,
            payload: error.message
        })
    }
}