import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"

import WithSpinner from "components/WithSpinner"
import CollectionPage from "./components/CollectionPage"
import { selectIsCollectionsLoaded } from "redux/shop/shopSelector"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
