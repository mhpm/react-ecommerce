import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 500px;
  @media (max-width: 600px) {
    margin-top: 0px;
    width: 90%;
  }
`

const FormContainer = (props) => {
  return <Container {...props} />
}

export default FormContainer
