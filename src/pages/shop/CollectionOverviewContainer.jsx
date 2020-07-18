import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { compose } from "redux"

import { selectIsCollectionFetching } from "redux/shop/shopSelector"
import WithSpinner from "components/WithSpinner"
import CollectionOverview from "./components/CollectionOverview"

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
