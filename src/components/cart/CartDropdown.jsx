import React from "react"
import styled from "styled-components"
import Button from "../Button"
import { connect } from "react-redux"
import CartItem from "./CartItem"

const Dropdown = styled.div`
  position: absolute;
  top: 80px;
  right: 65px;
  z-index: 5;
  width: 280px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: white;
  border: 1px solid #cecece;
`

const Items = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: #cecece;
  }
`

const CartDropdown = ({ cartItems }) => {
  return (
    <Dropdown>
      <Items>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Items>
      <Button block style={{ margin: "auto" }}>
        GO TO CHECKOUT
      </Button>
    </Dropdown>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
