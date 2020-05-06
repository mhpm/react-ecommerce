import React from "react"
import { Route, Switch } from "react-router-dom"
import Shop from "pages/shop/Shop.Landing"
import Auth from "pages/auth/Auth.Landing"
import Header from "components/layout/Header"
import styled, { ThemeProvider } from "styled-components"
import ThemeUI from "utils/ThemeUI"
import AuthState from "context/auth/authState"
import "./App.css"

const Container = styled.div`
  padding: 60px 60px;
  @media (max-width: 600px) {
    padding: 65px 25px;
  }
`

class App extends React.Component {
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

export default App
