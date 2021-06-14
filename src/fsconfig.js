// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyDsHU4NCMaUkWr0IE_Z8DrPC7uVU152yb0",
  authDomain: "labime.firebaseapp.com",
  databaseURL: "https://labime.firebaseio.com",
  projectId: "labime",
  storageBucket: "labime.appspot.com",
  messagingSenderId: "144931978831",
  appId: "1:144931978831:web:b3558b2accf2459fa4343a",
  measurementId: "G-1D6JY5PML7"
};
// Initialize Firebase
const initfb = firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const analic = firebase.analytics();

const firestore = initfb.firestore();
//const analytics = initfb.analytics();

export { firestore };
export {initfb}
export {analic}
