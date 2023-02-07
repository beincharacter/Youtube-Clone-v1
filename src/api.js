import axios from 'axios';

export const apiRequest = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyA45vFN63kspSxR4loB7ClNE3ZNv3wem-c'
    }
})