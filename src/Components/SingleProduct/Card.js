import React from "react";

import "./Card.css";

function Card({ product }) {
  return (
    <div className="col-lg-3">
      <div className="product-card p-3">
        <div className="inner-block p-relative">
          <div className="image-box w-100 p-relative">
            <img
              src={product?.images[0]?.src}
              alt="product"
              className="w-100 h-auto"
            />
          </div>
          <div className="product-detail">
            <div className="product-category fs-4 fw-bold">
              {product?.category}
            </div>
            <div className="product-name fw-normal">{product?.product}</div>
            <div className="product-price fs-3">{product?.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
