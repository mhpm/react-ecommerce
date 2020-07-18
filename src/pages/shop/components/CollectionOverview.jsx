import React from "react"
import { selectCollectionForPreview } from "redux/shop/shopSelector"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CollectionList from "./CollectionList"

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionList key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)
