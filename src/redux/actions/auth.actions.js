import firebase from 'firebase/app';
import auth from '../../firebase';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOAD_PROFILE, LOG_OUT
} from '../actionType';

export const login = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })

        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

        const  res = await auth.signInWithPopup(provider);
        console.log(res);

        const accessToken = res.credential.accessToken;

        const profileData = {
            name: res.additionalUserInfo.profile.name,
            picture: res.additionalUserInfo.profile.picture
        }

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('profileData', JSON.stringify(profileData));
        localStorage.setItem('profile', profileData.picture)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        });

        dispatch({
            type: LOAD_PROFILE,
            payload: profileData
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAILED,
            payload: error.message
        })
    }
}

export const log_out = () => async dispatch => {
    await auth.signOut();

    dispatch({
        type: LOG_OUT
    });

    localStorage.removeItem('accessToken');
    localStorage.removeItem('profileData')
}