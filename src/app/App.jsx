import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Shop from "pages/shop/Shop.Landing"
import Auth from "pages/auth/Auth.Landing"
import Header from "components/layout/Header"
import styled, { ThemeProvider } from "styled-components"
import ThemeUI from "utils/ThemeUI"
import "./App.css"
import { connect } from "react-redux"
import { setCurrentUser } from "redux/user/userActions"
import { createStructuredSelector } from "reselect"
import { selectCurrentUser } from "redux/user/userSelector"
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

  componentWillUnmount() {
    this.unsubscribreFromAuth()
  }

  render() {
    return (
      <ThemeProvider theme={ThemeUI}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/shop" component={Shop} />
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
