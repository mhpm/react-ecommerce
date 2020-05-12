import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Dropdown = styled.div`
  position: absolute;
  top: 80px;
  right: 65px;
  z-index: 5;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border: 1px solid #cecece;
`

const Items = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`

const CartDropdown = () => {
  return (
    <Dropdown>
      <Items></Items>
      <Button style={{ margin: "auto" }}>SHOP</Button>
    </Dropdown>
  )
}

export default CartDropdown
