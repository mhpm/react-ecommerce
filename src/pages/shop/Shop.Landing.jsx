import React, { useState } from "react"
import SHOP_DATA from "./shop.data"
import CollectionPreview from "components/CollectionPreview"

const Shop = () => {
  const [collections] = useState(SHOP_DATA)
  return (
    <div className="shop-landing">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Shop
