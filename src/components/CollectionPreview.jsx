import React from "react"
import CollectionItem from "./CollectionItem"
import styled from "styled-components"

const Preview = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
`

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">
        <h2>{title.toUpperCase()}</h2>
        <Preview className="preview">
          {items
            .filter((item, index) => index < 5)
            .map(({ id, ...otherProps }) => (
              <CollectionItem key={id} {...otherProps} />
            ))}
        </Preview>
      </div>
    </div>
  )
}

export default CollectionPreview
