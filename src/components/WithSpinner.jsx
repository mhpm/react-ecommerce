import React from "react"
import PulseLoader from "react-spinners/PulseLoader"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Container>
      <PulseLoader size={15} color={"rgb(191, 50, 114)"} loading={isLoading} />
    </Container>
  ) : (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner
