import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC385obYDDi5XIHWQFDsoNrk4oIPA-V6js",
  authDomain: "data101-b6e46.firebaseapp.com",
  projectId: "data101-b6e46",
  storageBucket: "data101-b6e46.firebasestorage.app",
  messagingSenderId: "1027593263417",
  appId: "1:1027593263417:web:b20cb563818eaf60c670e8",
  measurementId: "G-LN9ZQ4RQJ9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;
export const dbService = firebase.firestore();
export { firebase };
