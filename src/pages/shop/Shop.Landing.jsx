import React from "react"
import { Route } from "react-router-dom"
import CollectionPage from "./components/CollectionPage"
import CollectionOverview from "./components/CollectionOverview"

const Shop = ({ match }) => {
  return (
    <div className="shop-landing">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default Shop
