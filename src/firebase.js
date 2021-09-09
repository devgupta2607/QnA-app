//import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAToLlfq41Mg3idu86lBQd61h28P7OpuFE",
    authDomain: "qna-ps.firebaseapp.com",
    projectId: "qna-ps",
    storageBucket: "qna-ps.appspot.com",
    messagingSenderId: "678277868059",
    appId: "1:678277868059:web:37654423b99e68265da6be",
    measurementId: "G-3VPKEXBGXM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseApp.firestore()

export {auth, provider}
export default db
