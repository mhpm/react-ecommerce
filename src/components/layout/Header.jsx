import React, { useContext } from "react"
import Logo from "assets/logo.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import authContext from "context/auth/authContext"
import UserMenu from "./UserMenu"
import SideMenu from "./SideMenu"

const Container = styled.div`
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
  text-decoration: none;
  color: #bf3272;
  font-weight: 500;
  margin-left: 35px;

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
  margin-left: 45px;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
`

const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  width: auto;
  margin-right: 45px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Header = () => {
  const { user, singOut } = useContext(authContext)

  return (
    <Container>
      <Brand to="/">
        <img src={Logo} alt="logo" width={100} />
      </Brand>
      <Options>
        <LinkBase to="/shop">SHOP</LinkBase>
        <LinkBase to="/contact">CONTACT</LinkBase>
        <UserMenu user={user} singOut={singOut} />
      </Options>
      <SideMenu user={user} singOut={singOut} />
    </Container>
  )
}

export default Header
