import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import ThemeUI from "utils/ThemeUI"
import "./App.css"

import UserContext from "context/user/userContext"
import { auth, createUserProfileDocument } from "firebase/firebase.config"

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
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          })
        })
      }

      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <ThemeProvider theme={ThemeUI}>
        <UserContext.Provider value={this.state.currentUser}>
          <Header />
        </UserContext.Provider>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/auth"
              render={() =>
                this.state.currentUser ? <Redirect to="/" /> : <Auth />
              }
            />
          </Switch>
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
