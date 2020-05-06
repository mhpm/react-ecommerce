import React from "react"
import styled, { css } from "styled-components"

const ButtonStyled = styled.button`
  font-family: inherit;
  padding: 13px;
  width: 220px;
  background-color: ${(props) => props.theme.colors.default};
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 500;

  ${(props) =>
    props.block &&
    css`
      width: 100%};
    `}

  ${(props) =>
    props.color &&
    css`
      background-color: ${(props) => props.theme.colors[props.color]};
    `}

  &:active {
    opacity: 80%;
  }

  &:disabled {
    background-color: #eaeaea;
    color: #c3c3c3;
  }

  &:focus {
    outline: none !important;
  }
`

const Button = (props) => {
  return <ButtonStyled {...props} />
}

export default Button
