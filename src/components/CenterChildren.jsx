import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  flex-direction: column;
`

const CenterChildren = (props) => {
  return <Container {...props} />
}

export default CenterChildren
