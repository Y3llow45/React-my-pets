import firebase from "firebase/app";
import 'firebase/auth'


const firebaseConfig = { // Users submit requests using this config
  apiKey: "*",
  authDomain: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase
export const auth = firebase.auth();