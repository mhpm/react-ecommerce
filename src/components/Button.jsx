import React from "react"
import styled, { css } from "styled-components"

const ButtonStyled = styled.button`
  font-family: inherit;
  padding: 20px;
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

    ${(props) =>
      props.inverted &&
      css`
        font-weight: 600;
        color: ${(props) => props.theme.colors.default};
        background-color: white;
        border: 2px solid ${(props) => props.theme.colors.default};
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
