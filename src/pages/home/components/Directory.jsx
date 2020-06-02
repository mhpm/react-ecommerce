import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectDirectorySections } from "redux/directory/directorySelector"
import MenuItem from "./MenuItem"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 100%;
`

const Directory = ({ sections }) => {
  return (
    <Container>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
