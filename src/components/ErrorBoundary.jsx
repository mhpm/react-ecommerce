import React, { Component } from "react"
import styled from "styled-components"

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 30vh;
  height: 30vh;
`

export const ErrorImageText = styled.h2`
  font-size: 20px;
  color: #2f8e89;
`

class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
