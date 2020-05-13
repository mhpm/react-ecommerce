import React from "react"
import Logo from "assets/logo.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { auth } from "firebase/firebase.config"
import SideMenu from "./SideMenu"

import { connect } from "react-redux"
import CartIcon from "components/cart/CartIcon"
import CartDropdown from "components/cart/CartDropdown"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 50px;
  /* @media screen and (max-width: 600px) {
    text-align: center;
    justify-content: center;
  } */
`

const LinkBase = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #bf3272;
  font-weight: 500;
  margin-left: 35px;
  font-size: 16px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const Brand = styled(LinkBase)`
  font-size: 20px;
  font-weight: bolder;
  padding-left: 10px;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
`

const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  margin-right: 50px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Header = ({ user, hidden, cartItems }) => {
  return (
    <Container>
      <Brand to="/">
        <img src={Logo} alt="logo" width={100} />
      </Brand>
      <Options>
        <LinkBase to="/shop">SHOP</LinkBase>
        <LinkBase to="/contact">CONTACT</LinkBase>
        {user ? (
          <LinkBase to="#" onClick={() => auth.signOut()}>
            SING OUT
          </LinkBase>
        ) : (
          <LinkBase to="/auth">SING IN</LinkBase>
        )}
        <LinkBase to="#">
          <CartIcon data={cartItems.length} />
        </LinkBase>
      </Options>
      {hidden && <CartDropdown />}
      <SideMenu user={user} singOut={() => auth.signOut()} />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  hidden: state.cart.hidden,
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(Header)
