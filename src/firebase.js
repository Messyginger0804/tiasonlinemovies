// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAubZzzJv1puL-pF5wuEV0_HuA3Zh_sO_E",
    authDomain: "tiasonlinemovies.firebaseapp.com",
    projectId: "tiasonlinemovies",
    storageBucket: "tiasonlinemovies.appspot.com",
    messagingSenderId: "237398087320",
    appId: "1:237398087320:web:a80bebaeaa58f49f86a2ed",
    measurementId: "G-65B43JVC55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);