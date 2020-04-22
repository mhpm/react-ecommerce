import React, { useState } from "react"
import Link from "components/Link"
import Input from "components/Input"
import Button from "components/Button"
import FormContainer from "components/FormContainer"

const SingUpForm = ({ switchForm, handlerForm }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <h2>Sing up</h2>
      <p>Please type the next information</p>
      <br />
      <form onSubmit={onSubmit}>
        <Input type="text" label="Display Name" />
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
