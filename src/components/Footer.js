import React from "react";

export default function Footer({ products }) {
  // Calculate total quantity
  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  // Calculate total price
  const totalPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <footer className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h4>Total Quantity: {totalQuantity}</h4>
        </div>
        <div className="col text-center">
          <h4>Total Price: £{totalPrice}</h4>
        </div>
      </div>
    </footer>
  );
}
