import React from "react";

export default function Product({
  product,
  incrementQty,
  decrementQty,
  index,
}) {
  return (
    <div className="row mb-2">
      <div className="col-5">
        <h2>
          {product.name}
          <span className="badge text-bg-secondary ms-2">£{product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => decrementQty(index)}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => incrementQty(index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">Total: £{product.quantity * product.price}</div>
    </div>
  );
}
