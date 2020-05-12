import React from "react"
import ShoppingBag from "assets/shopping-bag.png"
import styled from "styled-components"
import { connect } from "react-redux"
import { toggleCartHidden } from "redux/cart/cartActions"

const Data = styled.span`
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  width: 100%;
  z-index: 99;
  height: 100%;
  top: 2px;
  font-size: 16px;
`

const CartIcon = ({ data, toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden}>
      <Data>{data}</Data>
      <img src={ShoppingBag} alt="" height="40" />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
