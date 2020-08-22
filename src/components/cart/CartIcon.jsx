import React, { useContext } from "react"
import ShoppingBag from "assets/shopping-bag.png"
import styled from "styled-components"
import { CartContext } from "providers/cart/cartProvider"

const Data = styled.span`
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  width: 100%;
  z-index: 99;
  height: 100%;
  top: 2px;
  font-size: 14px;
`

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext)
  return (
    <div onClick={toggleHidden}>
      <Data>{cartItemsCount}</Data>
      <img src={ShoppingBag} alt="" height="35" />
    </div>
  )
}

export default CartIcon
