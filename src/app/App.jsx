import React from "react"
import { Route, Switch } from "react-router-dom"
import Shop from "pages/shop/Shop.Landing"
import Auth from "pages/auth/Auth.Landing"
import Header from "components/layout/Header"
import styled, { ThemeProvider } from "styled-components"
import ThemeUI from "utils/ThemeUI"
import "./App.css"
import { connect } from "react-redux"
import { setCurrentUser } from "redux/user/userActions"
import AuthState from "context/auth/authState"
import { createUserProfileDocument, auth } from "firebase/firebase.config"

const Container = styled.div`
  padding: 60px 60px;
  @media (max-width: 600px) {
    padding: 65px 25px;
  }
`

class App extends React.Component {
  unsubscribreFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribreFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  render() {
    return (
      <AuthState>
        <ThemeProvider theme={ThemeUI}>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/" component={Shop} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/auth" component={Auth} />
            </Switch>
          </Container>
        </ThemeProvider>
      </AuthState>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
