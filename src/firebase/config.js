import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW7HrfQjzRMzgByljEs2fzjOFkGomhD6k",
  authDomain: "shaunjp-cook.firebaseapp.com",
  projectId: "shaunjp-cook",
  storageBucket: "shaunjp-cook.appspot.com",
  messagingSenderId: "305507689205",
  appId: "1:305507689205:web:5d8b74c4359137e9069bbc",
};

// init firebase instance
firebase.initializeApp(firebaseConfig);

// init services
const projectStorage = firebase.firestore();

export { projectStorage };
