import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDCF6BMRcg4gbSDsIHQI1WlfnTPqYv3ScI",
    authDomain: "crwn-db-5cda1.firebaseapp.com",
    databaseURL: "https://crwn-db-5cda1.firebaseio.com",
    projectId: "crwn-db-5cda1",
    storageBucket: "crwn-db-5cda1.appspot.com",
    messagingSenderId: "377777675453",
    appId: "1:377777675453:web:9c8c60a23956a43dc4ebd4",
    measurementId: "G-R26TG5RB02"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;