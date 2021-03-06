import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import ThemeUI from "utils/ThemeUI"
import "./App.css"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "redux/user/userSelector"
import { checkUserSession } from "../redux/user/userActions"

// Pages and Layout
import Header from "components/layout/Header"
import Shop from "pages/shop/Shop.Landing"
import Home from "pages/home/Home.Landing"
import Contact from "pages/contact/Contact.Landing"
import Auth from "pages/auth/Auth.Landing"
import Checkout from "pages/checkout/Checkout.Landing"

const Container = styled.div`
  padding: 30px 60px;
  @media (max-width: 600px) {
    padding: 65px 25px;
  }
`

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  render() {
    return (
      <ThemeProvider theme={ThemeUI}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/auth"
              render={() => (this.props.user ? <Redirect to="/" /> : <Auth />)}
            />
          </Switch>
        </Container>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
