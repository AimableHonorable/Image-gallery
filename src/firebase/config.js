import * as firebase from 'firebase/app'
import 'firebase/storage' //firebase storage
import 'firebase/firestore' // firebase database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPpMzsGqB5ZXJSE2PptaTPbg0M7sD3PX8",
  authDomain: "photo-gallery-2d5d6.firebaseapp.com",
  projectId: "photo-gallery-2d5d6",
  storageBucket: "photo-gallery-2d5d6.appspot.com",
  messagingSenderId: "317576358857",
  appId: "1:317576358857:web:da251320bf780980a39618"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialise storage service
const projectStorage = firebase.storage();

// initialize firestore service
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };