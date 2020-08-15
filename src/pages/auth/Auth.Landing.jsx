import React, { useState } from "react"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import CenterChildren from "components/CenterChildren"
import Link from "components/Link"
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions"
import { connect } from "react-redux"
import { signUpStart } from "redux/user/userActions"

const Auth = ({ googleSignInStart, emailSignInStart, signUpStart }) => {
  const [login, setLogin] = useState(true)
  const switchForm = () => setLogin(!login)

  return (
    <CenterChildren>
      {!login ? (
        <div>
          <SignUpForm
            handleSingUp={(displayName, email, password) =>
              signUpStart({ displayName, email, password })
            }
          ></SignUpForm>
          <div style={{ textAlign: "center" }}>
            <Link onClick={switchForm}>I already have an accout, Sign In.</Link>
          </div>
        </div>
      ) : (
        <div>
          <SignInForm
            handleSingIn={(email, password) =>
              emailSignInStart(email, password)
            }
            singInWithGoogle={googleSignInStart}
          ></SignInForm>
          <div style={{ textAlign: "center" }}>
            <Link onClick={switchForm}>Don't have an account? Sign Up.</Link>
          </div>
        </div>
      )}
    </CenterChildren>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(Auth)
