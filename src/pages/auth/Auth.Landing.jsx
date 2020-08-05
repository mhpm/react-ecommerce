import React, { useState } from "react"
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import CenterChildren from "components/CenterChildren"
import Link from "components/Link"
import { auth, createUserProfileDocument } from "firebase/firebase.config"
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions"
import { connect } from "react-redux"

const Auth = ({ googleSignInStart, emailSignInStart }) => {
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

  return (
    <CenterChildren>
      {login ? (
        <div>
          <SignUpForm
            handleSingUp={(displayName, email, password) =>
              singUp(displayName, email, password)
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
})

export default connect(null, mapDispatchToProps)(Auth)
