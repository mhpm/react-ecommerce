import React, { useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import FormContainer from "components/FormContainer"
import { FaCheck } from "react-icons/fa"

const SingUpForm = ({ handleSingUp }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    passConfirm: "",
  })

  const { displayName, email, password, passConfirm } = userCredentials

  const handleChange = (event) => {
    setCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    })
  }

  const validateForm = () => {
    if (displayName === "" || email === "" || password === "") return false
    else if (password === "" || password !== passConfirm) return false
    else return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    handleSingUp(displayName, email, password)
  }

  return (
    <FormContainer>
      <h2>Sign up</h2>
      <p>Please type the next information</p>
      <br />
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          label="Display Name"
        />
        <Input
          type="text"
          label="Email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Confirm Password"
          value={passConfirm}
          name="passConfirm"
          icon={
            password !== "" && password === passConfirm ? (
              <FaCheck
                style={{ color: "rgba(56, 179, 47, 0.61)" }}
                size="22px"
              ></FaCheck>
            ) : null
          }
          onChange={handleChange}
        />
        <br />
        <Button block>SIGN UP</Button>
      </form>
    </FormContainer>
  )
}

export default SingUpForm
