import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const initialProductList = [
    {
      price: 9999,
      name: "iPhone 15",
      quantity: 1,
    },
    {
      price: 9999,
      name: "iPhone 10s",
      quantity: 1,
    },
  ];

  let [products, setProducts] = useState(initialProductList);

  const incrementQty = (index) => {
    let newProductList = [...products];
    newProductList[index].quantity++;
    setProducts(newProductList);
  };

  const decrementQty = (index) => {
    let newProductList = [...products];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
    }
    setProducts(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={products}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
      </main>
      <Footer products={products} />
    </>
  );
}

export default App;
