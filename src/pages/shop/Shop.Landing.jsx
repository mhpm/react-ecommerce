import React, { Component } from "react"
import { Route } from "react-router-dom"
import CollectionOverviewContainer from "pages/shop/CollectionOverviewContainer"
import CollectionPageContainer from "pages/shop/CollectionPageContainer"
import { fetchCollectionsStartAsync } from "redux/shop/shopActions"
import { connect } from "react-redux"

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-landing">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(Shop)
