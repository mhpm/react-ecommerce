import React, { useContext } from "react"
import Logo from "assets/logo.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import SideMenu from "./SideMenu"
import CartDropdown from "components/cart/CartDropdown"
import UserContext from "context/user/userContext"
import { auth } from "firebase/firebase.config"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 55px 0px 55px;
  height: 50px;
  @media screen and (max-width: 600px) {
    padding: 15px 10px 0px 20px;
  }
`

const LinkBase = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #bf3272;
  font-weight: 500;
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
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Header = () => {
  const user = useContext(UserContext)

  return (
    <Container>
      <Brand to="/">
        <img src={Logo} alt="logo" width={100} />
      </Brand>
      <Options>
        <LinkBase style={{ marginRight: 20 }} to="/shop">
          SHOP
        </LinkBase>
        <LinkBase style={{ marginRight: 20 }} to="/contact">
          CONTACT
        </LinkBase>
        {user ? (
          <LinkBase
            style={{ marginRight: 20 }}
            to="#"
            onClick={() => auth.signOut()}
          >
            SING OUT
          </LinkBase>
        ) : (
          <LinkBase style={{ marginRight: 20 }} to="/auth">
            SIGN IN
          </LinkBase>
        )}
        <CartDropdown />
      </Options>
      <SideMenu user={user} singOut={() => auth.signOut()} />
    </Container>
  )
}

export default Header
