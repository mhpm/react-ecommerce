import React from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  position: relative;
  font-size: 14px;
  margin-bottom: 45px;
  margin-top: 15px;
  height: auto;
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
    border-color: #bf3272;
  }
`

const Label = styled.label`
  color: rgba(0, 0, 0, 0.54);
  position: absolute;
  top: -14px;
  left: 0;
  ${InputStyled}:focus ~ & {
    color: #bf3272;
  }
`

const HelpText = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  margin-top: 5px;
`

const Icon = styled.div`
  position: absolute;
  color: #cecece;
  right: 10px;
  bottom: 10px;
`

const Input = ({ label, value, helpText, onChange, type, icon }) => {
  return (
    <InputContainer>
      {icon && <Icon>{icon}</Icon>}
      <InputStyled type={type} value={value} onChange={onChange} />
      <Label htmlFor={label}>{label}</Label>
      <HelpText>{helpText}</HelpText>
    </InputContainer>
  )
}

export default Input
