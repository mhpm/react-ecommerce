import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import SingInForm from "./components/SingInForm"
import SingUpForm from "./components/SingUpForm"
import CenterChildren from "components/CenterChildren"
import { auth } from "firebase/firebase.config"

const Auth = () => {
  const [login, setLogin] = useState(true)
  const switchForm = () => setLogin(!login)
  const [user, setUser] = useState(null)

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  if (user?.email) {
    return <Redirect to="/" />
  } else {
    return (
      <CenterChildren>
        {login ? (
          <SingInForm switchForm={switchForm}></SingInForm>
        ) : (
          <SingUpForm switchForm={switchForm}></SingUpForm>
        )}
      </CenterChildren>
    )
  }
}

export default Auth
