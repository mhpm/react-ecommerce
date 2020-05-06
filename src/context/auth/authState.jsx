import React, { useReducer, useEffect } from "react"
import {
  auth,
  createUserProfileDocument,
  singInWithGoogle,
} from "firebase/firebase.config"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import { SET_LOADING, SING_IN, SING_OUT } from "../types"

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
  }

  var isSingUp = false
  var unsubscribreFromAuth = null
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    unsubscribreFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (isSingUp) return
      else if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: SING_IN,
            user: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      }
    })
    return () => {
      unsubscribreFromAuth()
    }
  }, [])

  // Sing In
  const singIn = (email, password) => {
    setLoading()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await createUserProfileDocument(user)
        dispatch({ type: SING_IN, user: user })
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code
        let errorMessage = error.message
        // ...
        console.error(errorMessage)
      })
  }

  // Sing Up
  const singUp = (displayName, email, password) => {
    setLoading()
    isSingUp = true
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        let user = { ...res.user }
        user.displayName = displayName
        await createUserProfileDocument(user)
        dispatch({ type: SING_IN, user: user })
        isSingUp = false
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code
        let errorMessage = error.message
        // ...
        console.error(errorMessage)
      })
  }

  const singOut = () => {
    auth.signOut()
    dispatch({ type: SING_OUT })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        singIn,
        singInWithGoogle,
        singOut,
        singUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
