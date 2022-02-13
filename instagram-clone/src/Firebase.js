import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHP2i2BbClrFviS_jWfiTai7U5nhfgszo",
  authDomain: "instagram-clone-94052.firebaseapp.com",
  projectId: "instagram-clone-94052",
  storageBucket: "instagram-clone-94052.appspot.com",
  messagingSenderId: "1028378616626",
  appId: "1:1028378616626:web:f75101ff41cf6739276d2b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
