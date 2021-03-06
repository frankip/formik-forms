import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
const Firebase = firebase.initializeApp(firebaseConfig);
const FirebaseAppAuth = Firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
const doCreateUserWithEmailAndPassword = (email, password) =>
  FirebaseAppAuth.createUserWithEmailAndPassword(email, password);

const doSignInWithEmailAndPassword = (email, password) =>
  FirebaseAppAuth.signInWithEmailAndPassword(email, password);

const doSignOut = () => FirebaseAppAuth.signOut();
const doPasswordReset = email => FirebaseAppAuth.sendPasswordResetEmail(email)
const doPasswordUpdate = password => FirebaseAppAuth.currentUser.updatePassword(password)



export default {Firebase};
export { FirebaseAppAuth, doCreateUserWithEmailAndPassword,  doSignInWithEmailAndPassword};