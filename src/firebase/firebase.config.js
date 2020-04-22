import firebase from "firebase"

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBDZtal57i42eFLrnttyuhgvEDNhpA9Voc",
  authDomain: "udemy-ecommerce-react.firebaseapp.com",
  databaseURL: "https://udemy-ecommerce-react.firebaseio.com",
  projectId: "udemy-ecommerce-react",
  storageBucket: "udemy-ecommerce-react.appspot.com",
  messagingSenderId: "464447038159",
  appId: "1:464447038159:web:76f17ae0e08d88c8e7cdba",
  measurementId: "G-M56YWMJVBE",
}
// Initialize Firebase
firebase.initializeApp(config)

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
const singInWithGoogle = () => auth.signInWithPopup(provider)

export { auth, firebase, firestore, singInWithGoogle }
