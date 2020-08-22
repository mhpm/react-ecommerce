import React, { useState } from "react"
import Input from "components/Input"
import Button from "components/Button"
import FormContainer from "components/FormContainer"
import styled from "styled-components"
import { auth, signInWithGoogle } from "firebase/firebase.config"

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

const SingInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") return

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer>
      <h2>Sign in</h2>
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
        <ButtonContainer>
          <Button block color="gray">
            SIGN IN
          </Button>
          <Button block isGoogle onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  )
}

export default SingInForm
