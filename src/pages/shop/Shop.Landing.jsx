import React, { Component } from "react"
import { Route } from "react-router-dom"
import CollectionOverview from "pages/shop/CollectionOverview"
import CollectionPage from "pages/shop/CollectionPage.Landing"
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "firebase/firebase.config"
import { connect } from "react-redux"
import { updateCollections } from "redux/shop/shopActions"
import WithSpinner from "components/WithSpinner"

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
        this.setState({ loading: false })
      }
    )
  }

  render() {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className="shop-landing">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(Shop)
