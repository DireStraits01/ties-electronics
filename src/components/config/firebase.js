// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkSXgjVdfeMPiobOt8NZ2UvQzMwLANZI4',
  authDomain: 'ties-electronics.firebaseapp.com',
  projectId: 'ties-electronics',
  storageBucket: 'ties-electronics.appspot.com',
  messagingSenderId: '14207418493',
  appId: '1:14207418493:web:96e258f9bd922530bcf114',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
