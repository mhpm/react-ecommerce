import React, { useReducer } from "react"
import { auth } from "firebase/firebase.config"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import { SET_LOADING, SING_IN, SING_OUT } from "../types"

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // Sing In
  const singIn = (user) => {
    setLoading()
    dispatch({ type: SING_IN, user: user })
    console.log(user)
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
        singOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
