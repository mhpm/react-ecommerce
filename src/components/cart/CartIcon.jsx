import React from "react"
import ShoppingBag from "assets/shopping-bag.png"
import styled from "styled-components"
import { connect } from "react-redux"
import { selectCartItemsCount } from "redux/cart/cartSelectors"
import { createStructuredSelector } from "reselect"

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

const CartIcon = ({ itemCount, toggleHidden }) => {
  return (
    <div onClick={toggleHidden}>
      <Data>{itemCount}</Data>
      <img src={ShoppingBag} alt="" height="35" />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(CartIcon)
