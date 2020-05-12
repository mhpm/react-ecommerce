import React from "react"
import CollectionItem from "./CollectionItem"
import styled from "styled-components"

const Preview = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1200px) {
    flex-flow: row wrap;
  }
`

const CollectionPreview = ({ title, items, listSize = 5 }) => {
  return (
    <div className="collection-preview">
      <div className="title">
        <h2>{title.toUpperCase()}</h2>
        <Preview className="preview">
          {items
            .filter((item, index) => index < listSize)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </Preview>
      </div>
    </div>
  )
}

export default CollectionPreview
