import React from "react"
import styled from "styled-components"

const LinkStyled = styled.a`
  cursor: pointer;
  color: #bf3272;
  &:hover {
    text-decoration: underline;
  }
`

const Link = (props) => {
  return <LinkStyled {...props} />
}

export default Link
