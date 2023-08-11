// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider
} from 'firebase/auth'


import { doc, getFirestore, getDoc, setDoc, collection } from 'firebase/firestore';
import { compileString } from "sass";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTh07fn1epFQCg7cz-aCQaq1iE4L1F5CU",
    authDomain: "crwn-clothing-db-47400.firebaseapp.com",
    projectId: "crwn-clothing-db-47400",
    storageBucket: "crwn-clothing-db-47400.appspot.com",
    messagingSenderId: "16335688327",
    appId: "1:16335688327:web:55c689f96007060d6d9e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signinwithgooglepopup = () => signInWithPopup(auth, provider);

export var db_fun = async ({ uid, email, displayName }) => {

    const db = getFirestore();

    const userdocref = doc(db, 'users', uid);
    var usersnapshot = await getDoc(userdocref);
    console.log("after usersnapshot");
    console.log(usersnapshot);
    console.log(usersnapshot.get("uid"))

    var o = {

        uid, email, displayName

    };

    if (!usersnapshot.exists()) {


        setDoc(userdocref, o);
    }

    return userdocref;


};



