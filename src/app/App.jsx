import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Shop from "pages/shop/Shop.Landing"
import Auth from "pages/auth/Auth.Landing"
import Header from "components/layout/Header"
import styled, { ThemeProvider } from "styled-components"
import ThemeUI from "utils/ThemeUI"
import AuthState from "context/auth/authState"
import "./App.css"
import { auth } from "firebase/firebase.config"

const Container = styled.div`
  padding: 60px 60px;
  @media (max-width: 600px) {
    padding: 65px 25px;
  }
`

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  return (
    <AuthState>
      <ThemeProvider theme={ThemeUI}>
        <Header currentUser={user} />
        <Container>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/auth" currentUser={user} component={Auth} />
          </Switch>
        </Container>
      </ThemeProvider>
    </AuthState>
  )
}

export default App
