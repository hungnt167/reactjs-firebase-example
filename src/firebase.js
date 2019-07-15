import firebase from 'firebase/app';
import 'firebase/database';

 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA17v2mhO8d4vzlA3RCxlQY3y15K9EJwyc",
    authDomain: "io-pos-ecommerce.firebaseapp.com",
    databaseURL: "https://io-pos-ecommerce.firebaseio.com",
    projectId: "io-pos-ecommerce",
    storageBucket: "io-pos-ecommerce.appspot.com",
    messagingSenderId: "554523603868",
    appId: "1:554523603868:web:0b2cf6fd5c39e537"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  export default firebase;