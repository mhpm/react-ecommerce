import React from "react"
import styled from "styled-components"

const Item = styled.div`
  height: 650px;
  width: 100%;
  padding: 5px;
`
const Img = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
`

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <Item>
      <Img style={{ backgroundImage: `url(${imageUrl})` }} />
      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>
    </Item>
  )
}

export default CollectionItem
