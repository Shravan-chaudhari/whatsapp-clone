import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC4bMHlk31JjA2gBYffdyinRNEXeNNIAxQ",
  authDomain: "whatsapp-clone-318a5.firebaseapp.com",
  projectId: "whatsapp-clone-318a5",
  storageBucket: "whatsapp-clone-318a5.appspot.com",
  messagingSenderId: "693273417718",
  appId: "1:693273417718:web:a95906144cdb70947399d7",
  measurementId: "G-TFMD8T5Y6L",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
