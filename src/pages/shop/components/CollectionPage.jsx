import React from "react"
import { connect } from "react-redux"
import { selectCollection } from "redux/shop/shopSelector"
import CollectionList from "pages/shop/components/CollectionList"

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  return (
    <div>
      <CollectionList title={title} items={items} listSize={5} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
