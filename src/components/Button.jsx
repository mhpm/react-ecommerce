import React from "react"
import styled, { css } from "styled-components"

const ButtonStyled = styled.button`
  font-family: inherit;
  padding: 13px;
  width: 220px;
  ${(props) =>
    props.block &&
    css`
      width: 100%};
    `}
  background-color: ${(props) => props.theme.colors.default};
  ${(props) =>
    props.color &&
    css`
      background-color: ${(props) => props.theme.colors[props.color]};
    `}
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 500;

  &:active {
    opacity: 80%;
  }

  &:focus {
    outline: none !important;
  }
`

const Button = (props) => {
  return <ButtonStyled {...props} />
}

export default Button
