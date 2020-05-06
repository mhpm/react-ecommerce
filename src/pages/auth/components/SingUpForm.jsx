import React, { useState } from "react"
import Link from "components/Link"
import Input from "components/Input"
import Button from "components/Button"
import FormContainer from "components/FormContainer"

const SingUpForm = ({ switchForm, singUpForm }) => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passConfirm, setPassConfirm] = useState("")

  const validateForm = () => {
    if (displayName === "" || email === "" || password === "") return false
    else if (password === "" || password !== passConfirm) return false
    else return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    singUpForm(displayName, email, password)
  }

  return (
    <FormContainer>
      <h2>Sing up</h2>
      <p>Please type the next information</p>
      <br />
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label="Display Name"
        />
        <Input
          type="text"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          label="Confirm Password"
          value={passConfirm}
          icon={
            password !== "" && password === passConfirm ? (
              <i
                style={{ color: "rgba(56, 179, 47, 0.61)" }}
                className="fas fa-check fa-lg"
              ></i>
            ) : null
          }
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <br /> <br />
        <Button block>SING UP</Button>
      </form>
      <br />
      <div style={{ textAlign: "center" }}>
        <Link onClick={switchForm}>I already have an accout, Sing In.</Link>
      </div>
    </FormContainer>
  )
}

export default SingUpForm
