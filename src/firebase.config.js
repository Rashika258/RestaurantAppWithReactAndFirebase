import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCNx4fWRXbNIOpkIULnNIRZAcHLEhwURrk",
    authDomain: "restaurantapp-9c9dd.firebaseapp.com",
    databaseURL: "https://restaurantapp-9c9dd-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-9c9dd",
    storageBucket: "restaurantapp-9c9dd.appspot.com",
    messagingSenderId: "25201333183",
    appId: "1:25201333183:web:38295af899033fea8e470a"
  };
  
// get the list of all the apps and if the app is not present only then initialise app else app will initialise it every time
const app = getApps.length >  0 ? getApp() : initializeApp(firebaseConfig);

const firestore=getFirestore(app);
const storage= getStorage(app);

export {app, firestore, storage};