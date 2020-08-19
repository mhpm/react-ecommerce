import React, { useContext } from "react"
import CollectionContext from "context/collections/collectionContext"
import CollectionList from "pages/shop/components/CollectionList"

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext)
  const collection = collections[match.params.collectionId]
  const { title, items } = collection

  return (
    <div>
      <CollectionList title={title} items={items} listSize={5} />
    </div>
  )
}

export default CollectionPage
