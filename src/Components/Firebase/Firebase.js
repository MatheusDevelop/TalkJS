import firebase from 'firebase'

const config={
    apiKey: "AIzaSyA6hhJ0k43fXUUZm8ZHwR3Nyl1-fJSRhUA",
    authDomain: "talkjs-e3caa.firebaseapp.com",
    databaseURL: "https://talkjs-e3caa.firebaseio.com",
    projectId: "talkjs-e3caa",
    storageBucket: "talkjs-e3caa.appspot.com",
    messagingSenderId: "458347278837",
    appId: "1:458347278837:web:9eb65e0b4f8970c77230bc",
    measurementId: "G-K52L6FG52S"
}
firebase.initializeApp(config);
firebase.analytics();
export const db = firebase.firestore();