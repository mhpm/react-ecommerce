import React from "react"
import Logo from "assets/logo.png"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { auth } from "firebase/firebase.config"
import Button from "components/Button"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 50px;
  @media screen and (max-width: 600px) {
    text-align: center;
    justify-content: center;
  }
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
  justify-content: flex-end;
  width: auto;
  margin-right: 45px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Header = ({ currentUser }) => {
  return (
    <Container>
      <Brand to="/">
        <img src={Logo} alt="logo" width={100} />
      </Brand>
      <Options>
        <LinkBase to="/shop">SHOP</LinkBase>
        <LinkBase to="/contact">CONTACT</LinkBase>
        {currentUser ? (
          <LinkBase to="#" onClick={() => auth.signOut()}>
            SING OUT
          </LinkBase>
        ) : (
          <LinkBase to="/auth">SING IN</LinkBase>
        )}
      </Options>
    </Container>
  )
}

export default Header
