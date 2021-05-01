import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6myx11GTsqC-qW34mtH4wOBG5WNFnA24",
    authDomain: "health-app-30d89.firebaseapp.com",
    projectId: "health-app-30d89",
    storageBucket: "health-app-30d89.appspot.com",
    messagingSenderId: "267405834658",
    appId: "1:267405834658:web:9455c02c93947592f51afb",
    measurementId: "G-JKZ3VK44TK"
  };

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;