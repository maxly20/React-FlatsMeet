import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD8CBQa1XQ6zs8W0_Y-i9fH9y9CyEeOBh8',
  authDomain: 'clone-540e4.firebaseapp.com',
  projectId: 'clone-540e4',
  storageBucket: 'clone-540e4.appspot.com',
  messagingSenderId: '1080486811747',
  appId: '1:1080486811747:web:bb359dc7d652bb50c14056',
  measurementId: 'G-GFNE23GG6L',
});

const auth = firebase.auth();

export { auth };
