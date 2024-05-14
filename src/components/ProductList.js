import React from "react";
import Product from "./Product";

export default function ProductList({
  productList,
  incrementQty,
  decrementQty,
}) {
  return (
    <div>
      {productList.map((product, i) => (
        <Product
          product={product}
          key={i}
          index={i}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
      ))}
    </div>
  );
}
