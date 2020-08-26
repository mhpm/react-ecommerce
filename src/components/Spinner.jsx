import React from "react"
import PulseLoader from "react-spinners/PulseLoader"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`

const Spinner = () => {
  return (
    <Container>
      <PulseLoader size={12} color={"rgb(191, 50, 114)"} />
    </Container>
  )
}

export default Spinner
