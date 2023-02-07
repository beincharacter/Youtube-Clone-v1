import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA45vFN63kspSxR4loB7ClNE3ZNv3wem-c",
    authDomain: "yt-clone-1004.firebaseapp.com",
    projectId: "yt-clone-1004",
    storageBucket: "yt-clone-1004.appspot.com",
    messagingSenderId: "1039968179090",
    appId: "1:1039968179090:web:9e00f99dfca7ed9196a74b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();