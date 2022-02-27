import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAgPKJglQSpFKwofd_nfRdc9O0Eu3DXXU8",
  authDomain: "invoiceplanner.firebaseapp.com",
  projectId: "invoiceplanner",
  storageBucket: "invoiceplanner.appspot.com",
  messagingSenderId: "19912291117",
  appId: "1:19912291117:web:9f2eaa3bb0009337ccd9a4",
  measurementId: "G-0KJG1T9610"
};

initializeApp(firebaseConfig)

const db = getFirestore();

export default db