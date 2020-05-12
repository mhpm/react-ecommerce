import React, { useState } from "react"
import SingInForm from "./components/SingInForm"
import SingUpForm from "./components/SingUpForm"
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
        <SingInForm
          switchForm={switchForm}
          singInWithGoogle={singInWithGoogle}
          handleSingIn={(email, password) => singIn(email, password)}
        ></SingInForm>
      ) : (
        <SingUpForm
          switchForm={switchForm}
          handleSingUp={(displayName, email, password) =>
            singUp(displayName, email, password)
          }
        ></SingUpForm>
      )}
    </CenterChildren>
  )
}

export default Auth
