// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBosWBfEK-mCykzWMygbQ3u9Ph8SJ09j78",
    authDomain: "router-firebase-intrigat-bb1fc.firebaseapp.com",
    projectId: "router-firebase-intrigat-bb1fc",
    storageBucket: "router-firebase-intrigat-bb1fc.appspot.com",
    messagingSenderId: "18514735168",
    appId: "1:18514735168:web:d355d801b6ad2c2698efa5",
    measurementId: "G-ZRVZZQH3ZG"
};

// Initialize Firebase
const myapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(myapp);

const app = { myapp, analytics }


export default app;