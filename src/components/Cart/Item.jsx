import React, { useState } from 'react';

function Item({ artistName = 'Artist Name', artworkName = 'artwork Name' }) {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 175;
  const [price, setPrice] = useState(basePrice);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
    setPrice(basePrice * (quantity + 1));
  };

  const subtractQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    setPrice(basePrice * (quantity > 1 ? quantity - 1 : 1));
  };

  return (
    <div className="mb-15">
      <div className="flex justify-between ">
        <div className="pb-3">
          <div className="font-bold text-sm tracking uppercase text-primary">
            {artistName}
          </div>
          <div className="uppercase tracking font-bold text-tiny text-secondary">
            {artworkName}
          </div>
        </div>
        <div className="flex justify-between">
          <img
            src="/images/cart/subtract.svg"
            alt=""
            className="link"
            onClick={subtractQuantity}
          />
          <div className="tracking text-sm text-secondary font-light flex items-center px-6 pt-3">
            {quantity}
          </div>
          <img
            src="/images/cart/add.svg"
            className="link"
            alt=""
            onClick={addQuantity}
          />
        </div>
      </div>
      <div className="flex justify-between pb-20 border-b border-border">
        <img src="/images/cart/product.svg" alt="" />
        <div>
          <div className="text-primary text-sm tracking uppercase font-bold pb-28">
            £{price}
          </div>
          <img src="/images/cart/delete.svg" className="link" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Item;
