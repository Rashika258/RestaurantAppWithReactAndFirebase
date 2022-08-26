// import {initializeApp} from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNx4fWRXbNIOpkIULnNIRZAcHLEhwURrk",
  authDomain: "restaurantapp-9c9dd.firebaseapp.com",
  databaseURL: "https://restaurantapp-9c9dd-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9c9dd",
  storageBucket: "restaurantapp-9c9dd.appspot.com",
  messagingSenderId: "25201333183",
  appId: "1:25201333183:web:38295af899033fea8e470a",
};

// const app = firebase.getApps.length > 0 ? firebase.getApp() : firebase.initializeApp(firebaseConfig);

const app=firebase.initializeApp(firebaseConfig);

// const firestore=app.firestore();

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };