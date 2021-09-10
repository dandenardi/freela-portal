import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyCdStrv6ynkS2iR22-Iacs-X4fEHeVsGHo',

  authDomain: 'freeladb-345d5.firebaseapp.com',

  projectId: 'freeladb-345d5',

  storageBucket: 'freeladb-345d5.appspot.com',

  messagingSenderId: '220470065595',

  appId: '1:220470065595:web:2e58c5701eae4160946c9e',

  measurementId: 'G-6YV1E7J3GH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
