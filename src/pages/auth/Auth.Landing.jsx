import React, { useState } from "react"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import CenterChildren from "components/CenterChildren"
import {
  auth,
  createUserProfileDocument,
  singInWithGoogle,
} from "firebase/firebase.config"

const Auth = () => {
  const [login, setLogin] = useState(true)
  const switchForm = () => setLogin(!login)

  // Sing Up
  const singUp = async (displayName, email, password) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.error(error)
    }
  }

  // Sing In
  const singIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code
      let errorMessage = error.message
      // ...
      console.error(errorCode, errorMessage)
    })
  }

  return (
    <CenterChildren>
      {login ? (
        <SignUpForm
          switchForm={switchForm}
          handleSingUp={(displayName, email, password) =>
            singUp(displayName, email, password)
          }
        ></SignUpForm>
      ) : (
        <SignInForm
          switchForm={switchForm}
          handleSingIn={(email, password) => singIn(email, password)}
          singInWithGoogle={singInWithGoogle}
        ></SignInForm>
      )}
    </CenterChildren>
  )
}

export default Auth
