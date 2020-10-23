import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "../../data/data";

const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default Shop;
