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
firebase.initializeApp(config)

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error("error creatind user", error.message)
    }
  }

  return userRef
}

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

const auth = firebase.auth()
const firestore = firebase.firestore()

// google sing in provider
const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export {
  auth,
  firebase,
  firestore,
  signInWithGoogle,
  googleProvider,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap,
}
