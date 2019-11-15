import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAO6qJ3EFwxTiLocKCWI6HZa19zINP4ozI",
  authDomain: "book-store-optimizers.firebaseapp.com",
  databaseURL: "https://book-store-optimizers.firebaseio.com",
  projectId: "book-store-optimizers",
  storageBucket: "book-store-optimizers.appspot.com",
  messagingSenderId: "890674273077",
  appId: "1:890674273077:web:ffd21f3c1308b0796c0a7c",
  measurementId: "G-Y9LCDS55DP"
};

const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default fire;
export {storage};