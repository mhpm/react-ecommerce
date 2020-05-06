import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const LinkBase = styled(Link)`
  text-decoration: none;
  color: #bf3272;
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 1.3em;
  align-self: flex-end;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 600px) {
    display: none;
  }
`

const IconMenu = styled(FaBars)`
  cursor: pointer;
  font-size: 30px;
  float: right;
  margin-right: 10px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-330px")};
  z-index: 999;
  position: absolute;
  padding: 20px;
  width: 50%;
  height: 100vh;
  text-align: center;
  background-color: #333238;
  transition: right 0.5s;
`
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4d4d;
  margin-bottom: 15px;
  margin-top: 15px;
`

const SideMenu = ({ user, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <Wrapper>
      <IconMenu onClick={toggle} />

      <Menu open={isOpen}>
        <LinkBase onClick={toggle} to="#">
          <FaTimes size="30px" />
        </LinkBase>
        <LinkBase onClick={toggle} to="/shop">
          SHOP
        </LinkBase>
        <LinkBase onClick={toggle} to="/contact">
          CONTACT
        </LinkBase>
      </Menu>
    </Wrapper>
  )
}

export default SideMenu
