import React, { useContext } from "react"
import styled from "styled-components"
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import StripeButton from "components/StripeButton"

import { CartContext } from "providers/cart/cartProvider"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Wrapper = styled.div`
  width: 70%;
  @media screen and (min-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #cecece;
  & > div {
    font-weight: 700;
    width: 11.75%;
  }

  .last {
    width: 13%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const HeaderMobile = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid #cecece;
  font-weight: 700;
  width: 100%;

  @media screen and (min-width: 601px) {
    display: none;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #cecece;
  color: #8d8d8d;
  font-size: 14px;
  font-weight: 700;
  & > div {
    width: 11.75%;
  }

  .last {
    width: 13%;
  }
`

const Img = styled.img`
  height: 80px;
  width: 70px;
  border-radius: 5%;

  @media screen and (max-width: 600px) {
    height: 60px;
  }
`
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;

  & span:first-child {
    font-weight: 600;
  }
`

const Line = styled.div`
  border-bottom: 1px solid #cecece;
  width: 100%;
`

const Checkout = () => {
  const {
    removeItem,
    addItem,
    cartItems,
    clearItemFromCart,
    cartTotalPrice,
  } = useContext(CartContext)

  return (
    <Container>
      <Wrapper>
        <Header>
          <div>Product</div>
          <div>Description</div>
          <div>Quantity</div>
          <div>Price</div>
          <div className="last">Remove</div>
        </Header>
        <HeaderMobile>Shopping Cart</HeaderMobile>
        <List>
          {cartItems.map((item, index) => (
            <Item key={index}>
              <div>
                <Img src={item.imageUrl} alt="" />
              </div>
              <div>{item.name}</div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="first"
              >
                <FaAngleLeft
                  onClick={() => removeItem(item)}
                  size="22px"
                  style={{ marginRight: 5, cursor: "pointer" }}
                />
                <span>{item.quantity}</span>
                <FaAngleRight
                  onClick={() => addItem(item)}
                  size="22px"
                  style={{ marginLeft: 5, cursor: "pointer" }}
                />
              </div>
              <div>$ {item.price}</div>
              <div className="last">
                <FaTimes
                  onClick={() => clearItemFromCart(item)}
                  size="20px"
                  style={{ marginLeft: 17, cursor: "pointer" }}
                />
              </div>
            </Item>
          ))}
        </List>
        <div>
          <PriceContainer>
            <span>Subtotal:</span>
            <span> ${cartTotalPrice}</span>
          </PriceContainer>
          <PriceContainer>
            <span>Taxes (%16):</span>
            <span> ${cartTotalPrice * 0.16}</span>
          </PriceContainer>
          <PriceContainer>
            <span>Total:</span>
            <span>$ {cartTotalPrice + cartTotalPrice * 0.16}</span>
          </PriceContainer>
          <Line />
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <StripeButton
            className="custom"
            price={cartTotalPrice + cartTotalPrice * 0.16}
          />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Checkout
