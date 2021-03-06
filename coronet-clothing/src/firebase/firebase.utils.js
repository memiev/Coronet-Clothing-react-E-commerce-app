import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBtb9To8XszhQaSSPnNpmVnQrxMi4QJKms",
  authDomain: "coronet-db-3d87a.firebaseapp.com",
  projectId: "coronet-db-3d87a",
  storageBucket: "coronet-db-3d87a.appspot.com",
  messagingSenderId: "36372848466",
  appId: "1:36372848466:web:e7bf2b4d4ec8118149a48b",
  measurementId: "G-ZJN1CQRJHJ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;









