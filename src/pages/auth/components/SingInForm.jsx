import React, { useState } from "react"
import Link from "components/Link"
import Input from "components/Input"
import Button from "components/Button"
import FormContainer from "components/FormContainer"
import styled from "styled-components"

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    margin: 5px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    & > button {
      margin: 0px;
      margin-top: 10px;
    }
  }
`

const SingInForm = ({ switchForm, handleSingIn, singInWithGoogle }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === "" || password === "") return

    handleSingIn(email, password)
  }

  return (
    <FormContainer>
      <h2>Sing in</h2>
      <p>Please use your email and password</p>
      <br />
      <form onSubmit={onSubmit}>
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
        <br />
        <br />
        <ButtonContainer>
          <Button block color="gray">
            SING IN
          </Button>
          <Button block onClick={() => singInWithGoogle()}>
            SING IN WITH GOOGLE
          </Button>
        </ButtonContainer>
      </form>
      <br />
      <div style={{ textAlign: "center" }}>
        <Link onClick={switchForm}>Don't have an account? Sing Up.</Link>
      </div>
    </FormContainer>
  )
}

export default SingInForm
