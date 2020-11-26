import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6TOwwD0GXsMsk0ihX1skXcLS3KtqNLmg",
  authDomain: "crown-db-b0213.firebaseapp.com",
  databaseURL: "https://crown-db-b0213.firebaseio.com",
  projectId: "crown-db-b0213",
  storageBucket: "crown-db-b0213.appspot.com",
  messagingSenderId: "731703408235",
  appId: "1:731703408235:web:a63ec256f914862c3a232e",
  measurementId: "G-LXCVQF54NF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;