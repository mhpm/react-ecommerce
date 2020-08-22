import React, { useContext } from "react"
import CollectionList from "./CollectionList"
import CollectionContext from "context/collections/collectionContext"

const CollectionOverview = () => {
  const collectionsMap = useContext(CollectionContext)
  const collections = Object.keys(collectionsMap).map(
    (key) => collectionsMap[key]
  )
  console.log(collections)
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionList key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default CollectionOverview
