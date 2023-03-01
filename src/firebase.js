// const firebaseConfig = {
//     apiKey: "AIzaSyDzHzlEskRF8REDDE6isgOXp8V3nOOQzcI",
//     authDomain: "netflix-clone-84544.firebaseapp.com",
//     projectId: "netflix-clone-84544",
//     storageBucket: "netflix-clone-84544.appspot.com",
//     messagingSenderId: "435774344564",
//     appId: "1:435774344564:web:de51406cb99207e213b021"
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2JDvweGn0K77moO-DX1JA6ETtcNnWP0A",
    authDomain: "netflix-clone-ba8d5.firebaseapp.com",
    projectId: "netflix-clone-ba8d5",
    storageBucket: "netflix-clone-ba8d5.appspot.com",
    messagingSenderId: "126703964708",
    appId: "1:126703964708:web:ec935680a0f9cc6251beb1",
    measurementId: "G-F6Z4ZVXTGN",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);