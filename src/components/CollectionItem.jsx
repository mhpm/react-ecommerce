import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { connect } from "react-redux"
import { addItem } from "redux/cart/cartActions"

const Item = styled.div`
  position: relative;
  height: 650px;
  margin: 5px;

  &:hover .bgHover {
    opacity: 0.5;
    cursor: pointer;
  }

  &:hover .btnContainer {
    opacity: 1;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }

  @media screen and (min-width: 751px) {
    width: 48%;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`
const Img = styled.img`
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

const ButtonContainer = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 60px;
  width: 100%;
  text-align: center;
  left: 0;
  transition: opacity 0.5s;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  width: 100%;
  height: 95%;
  opacity: 0;
  transition: opacity 0.5s;
`

const CollectionItem = ({ item, addItem }) => {
  return (
    <Item>
      <Background className="bgHover" />
      <Img style={{ backgroundImage: `url(${item.imageUrl})` }} />
      <ButtonContainer className="btnContainer">
        <Button style={{ width: 180 }} onClick={() => addItem(item)}>
          ADD TO CART
        </Button>
      </ButtonContainer>
      <Footer>
        <span>{item.name}</span>
        <span>${item.price}</span>
      </Footer>
    </Item>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
