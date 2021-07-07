import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV57qyViF-EbcexKi6AmGRl2BP3AtMvGM",
    authDomain: "challenge-65260.firebaseapp.com",
    projectId: "challenge-65260",
    storageBucket: "challenge-65260.appspot.com",
    messagingSenderId: "430277673689",
    appId: "1:430277673689:web:c1196e01b63171f885f4c8",
    measurementId: "G-BZYFD7GSF7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};