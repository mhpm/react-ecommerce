import React, { useState, useContext } from "react"
import { Redirect } from "react-router-dom"
import SingInForm from "./components/SingInForm"
import SingUpForm from "./components/SingUpForm"
import CenterChildren from "components/CenterChildren"
import authContext from "context/auth/authContext"
import {
  auth,
  createUserProfileDocument,
  singInWithGoogle,
} from "firebase/firebase.config"

const Auth = () => {
  const [login, setLogin] = useState(true)
  const { isAuthenticated, singIn, singUp } = useContext(authContext)
  const switchForm = () => setLogin(!login)

  if (isAuthenticated) {
    return <Redirect to="/" />
  } else {
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
}

export default Auth
