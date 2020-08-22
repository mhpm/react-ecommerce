import React, { useState } from "react"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import CenterChildren from "components/CenterChildren"
import Link from "components/Link"

const Auth = () => {
  const [login, setLogin] = useState(true)
  const switchForm = () => setLogin(!login)

  return (
    <CenterChildren>
      {!login ? (
        <div>
          <SignUpForm />
          <div style={{ textAlign: "center" }}>
            <Link onClick={switchForm}>I already have an accout, Sign In.</Link>
          </div>
        </div>
      ) : (
        <div>
          <SignInForm />
          <div style={{ textAlign: "center" }}>
            <Link onClick={switchForm}>Don't have an account? Sign Up.</Link>
          </div>
        </div>
      )}
    </CenterChildren>
  )
}

export default Auth
