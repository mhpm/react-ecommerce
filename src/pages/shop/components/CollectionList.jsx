import React from "react"
import ListItem from "./ListItem"
import styled from "styled-components"

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  flex-flow: row wrap;
`

const CollectionPreview = ({ title, items, listSize = 4 }) => {
  return (
    <div className="collection-preview">
      <div className="title">
        <h2>{title.toUpperCase()}</h2>
        <Preview className="preview">
          {items
            .filter((item, index) => index < listSize)
            .map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
        </Preview>
      </div>
    </div>
  )
}

export default CollectionPreview
