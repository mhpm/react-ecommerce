import React from "react"
import styled from "styled-components"
import Button from "components/Button"
import { connect } from "react-redux"
import { addItem } from "redux/cart/cartActions"

const Item = styled.div`
  position: relative;
  height: 700px;
  margin: 5px;
  margin-bottom: 15px;
  overflow: hidden;

  &:hover {
    .bgHover {
      opacity: 0.3;
    }
    .btnContainer {
      opacity: 1;
    }

    .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  @media screen and (max-width: 750px) {
    flex: 1 0 50%;
  }

  @media screen and (min-width: 751px) {
    flex: 1 0 40%;
  }

  @media screen and (min-width: 1200px) {
    flex: 0 24%;
  }
`

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  align-items: center;
  font-weight: 700;
  bottom: 0px;
  color: white;
  width: 100%;
  background-color: #212121;
  height: 40px;
  z-index: 999;
`

const ButtonContainer = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 80px;
  width: 100%;
  text-align: center;
  left: 0;
  transition: opacity 0.5s;
  z-index: 99;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 2;
`

const CollectionItem = ({ item, addItem }) => {
  return (
    <Item>
      <Background className="bgHover" />
      <Img
        className="background-image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
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
