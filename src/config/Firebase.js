import { initializeApp } from 'firebase/app';
import {
  getAuth,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBOoWR13Zr51JsjsnQNkphTJd78J0LM2Co',
  authDomain: 'mop-client-dd85e.firebaseapp.com',
  projectId: 'mop-client-dd85e',
  storageBucket: 'mop-client-dd85e.appspot.com',
  messagingSenderId: '202932290386',
  appId: '1:202932290386:web:c65d4ef68b21e28bdd308b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      console.log({ result });
    })
    .catch((er) => {
      console.log({ er });
    });
};
export const signInWithTwitter = () => {
  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      console.log({ result });
    })
    .catch((er) => {
      console.log({ er });
    });
};
