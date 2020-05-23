import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 17px;
`

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <Container>
      <img src={imageUrl} alt="" height="70" width="50" />
      <div style={{ marginLeft: 15 }}>
        <Title>{name}</Title>
        <div style={{ fontSize: 14 }}>
          {quantity} x ${price}
        </div>
      </div>
    </Container>
  )
}

export default CartItem
