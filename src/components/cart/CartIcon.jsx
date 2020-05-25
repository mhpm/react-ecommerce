import React from "react"
import ShoppingBag from "assets/shopping-bag.png"
import styled from "styled-components"
import { connect } from "react-redux"
import { toggleCartHidden } from "redux/cart/cartActions"
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

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden}>
      <Data>{itemCount}</Data>
      <img src={ShoppingBag} alt="" height="35" />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
