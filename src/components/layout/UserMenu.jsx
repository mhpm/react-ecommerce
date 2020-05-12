import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaUserCircle } from "react-icons/fa"

const LinkBase = styled(Link)`
  text-decoration: none;
  color: #bf3272;
  font-weight: 500;
  margin-left: 35px;
  font-size: 20px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const DropMenu = styled.div`
  position: fixed;
  top: 59px;
  right: 14px;
  display: flex;
  flex-direction: column;
  width: 132px;
  height: auto;
  margin-right: 45px;
  z-index: 999;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 12px #e1e1e1;
  padding: 20px;
  text-align: center;
  /* @media screen and (max-width: 600px) {
    display: none;
  } */
`

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #ededed;
  margin-bottom: 15px;
  margin-top: 15px;
`

const UserMenu = ({ user, singOut }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  let nodeRef = useRef()

  const handleSingOut = () => {
    toggle()
    singOut()
  }

  const handleClick = () => {
    if (isOpen) {
      // attach/remove event handler
      document.addEventListener("click", handleOutsideClick, false)
    } else {
      document.removeEventListener("click", handleOutsideClick, false)
    }

    setIsOpen(!isOpen)
  }

  const handleOutsideClick = (e) => {
    console.log(e)

    // ignore clicks on the component itself
    if (nodeRef.contains(e.target)) {
      return
    }

    handleClick()
  }

  return (
    <div
      ref={(node) => {
        nodeRef = node
      }}
    >
      {user ? (
        <LinkBase to="#" onClick={toggle}>
          <FaUserCircle size="24px" onClick={toggle}></FaUserCircle>
        </LinkBase>
      ) : (
        <LinkBase to="/auth">SING IN</LinkBase>
      )}
      {isOpen && (
        <DropMenu>
          {user && user.displayName}
          <Line />
          <LinkBase to="#" onClick={handleSingOut} style={{ marginLeft: 0 }}>
            SING OUT
          </LinkBase>
        </DropMenu>
      )}
    </div>
  )
}

export default UserMenu
