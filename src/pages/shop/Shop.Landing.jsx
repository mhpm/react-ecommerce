import React from "react"
import { Route } from "react-router-dom"
import CollectionOverview from "pages/shop/CollectionOverview"
import CollectionPage from "pages/shop/CollectionPage.Landing"

const Shop = ({ match }) => {
  return (
    <div className="shop-landing">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default Shop
