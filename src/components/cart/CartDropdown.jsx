import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "../Button"
import { connect } from "react-redux"
import CartItem from "./CartItem"
import { toggleCartHidden } from "redux/cart/cartActions"
import { selectCartItems, selectCartHidden } from "redux/cart/cartSelectors"
import { createStructuredSelector } from "reselect"
import emptyImg from "assets/empty.png"

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
  overflow: hidden;
`

const Items = styled.div`
  margin-bottom: 20px;
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

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const CartDropdown = ({ cartItems, hidden, dispatch }) => {
  if (hidden)
    return (
      <Dropdown>
        {cartItems.length ? (
          <div>
            <Items>
              {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </Items>
            <Link to="/checkout" onClick={() => dispatch(toggleCartHidden())}>
              <Button block style={{ margin: "auto" }}>
                GO TO CHECKOUT
              </Button>
            </Link>
          </div>
        ) : (
          <EmptyContainer>
            <img src={emptyImg} alt="" width="600" />
          </EmptyContainer>
        )}
      </Dropdown>
    )
  else return null
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(CartDropdown)
