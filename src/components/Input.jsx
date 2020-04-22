import React from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
  margin-top: 15px;
  height: auto;
`

const Label = styled.label`
  color: rgba(0, 0, 0, 0.54);
`

const InputStyled = styled.input`
  font-family: inherit;
  font-size: 16px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1.2px solid rgba(0, 0, 0, 0.54);
  &:focus {
    outline: none;
  }
`

const HelpText = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  margin-top: 5px;
`

const Input = ({ label, value, helpText, onChange, type }) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <InputStyled type={type} value={value} onChange={onChange} />
      <HelpText>{helpText}</HelpText>
    </InputContainer>
  )
}

export default Input
