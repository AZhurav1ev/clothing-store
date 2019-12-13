import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8VPbPYq6_RTitXqbNea9lIBMM54Zv6I4",
    authDomain: "clothing-street.firebaseapp.com",
    databaseURL: "https://clothing-street.firebaseio.com",
    projectId: "clothing-street",
    storageBucket: "clothing-street.appspot.com",
    messagingSenderId: "789235635214",
    appId: "1:789235635214:web:baab708ff45e9470b6985f",
    measurementId: "G-1JKWZRF39N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

