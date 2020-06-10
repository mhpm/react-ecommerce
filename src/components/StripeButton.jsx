import React from "react"
import StripeCheckout from "react-stripe-checkout"
import styled from "styled-components"
import Button from "components/Button"
import storeImg from "assets/store.svg"

const BtnStyled = styled(Button)`
  background: linear-gradient(360deg, rgb(0, 172, 206) 0%, rgb(97, 222, 248));
  font-size: 16px;
  width: 140px;
  height: 42px;
  padding: 0;
  border-radius: 5px;
`

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_I5zNMmXAwoHJqDHWWWLv77ZN"

  const onToken = (token) => {
    console.log(token)
    console.log("Payment Successful")
    //empty your cart here
  }

  return (
    <StripeCheckout
      name="Shopping"
      image={storeImg}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    >
      <BtnStyled>Pay Now</BtnStyled>
    </StripeCheckout>
  )
}

export default StripeButton
