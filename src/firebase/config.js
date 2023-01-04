import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore' 
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBWuZuMrFFsUA3YwVna8NGAsf-2SdTKiss",
    authDomain: "olx-b971d.firebaseapp.com",
    projectId: "olx-b971d",
    storageBucket: "olx-b971d.appspot.com",
    messagingSenderId: "286830095664",
    appId: "1:286830095664:web:fdb57013288d967893acf5",
    measurementId: "G-G80G8PN9XN"
  };

  export default firebase.initializeApp(firebaseConfig)