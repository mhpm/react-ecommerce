import React, { useContext } from "react"
import DirectoryContext from "context/directory/directoryContext"
import MenuItem from "./MenuItem"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Directory = () => {
  const sections = useContext(DirectoryContext)
  return (
    <Container>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Container>
  )
}

export default Directory
