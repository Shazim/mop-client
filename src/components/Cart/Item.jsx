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
    <div>
      <div className="block sm:hidden">
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
              <div className="tracking text-sm text-secondary font-nunito-light flex items-center px-6 pt-3">
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
      </div>
      <div className="hidden sm:block">
        <div className="flex hr-b pt-10">
          <div className="w-44 h-31">
            <img src="/images/cart/product.svg" alt="" />
          </div>

          <div className="pb-3 flex-grow">
            <div className="font-light text-base tracking uppercase text-secondary pl-5">
              {artistName}
            </div>
            <div className="uppercase tracking font-light text-base text-secondary pl-5">
              {artworkName}
            </div>
          </div>
          <div>
            <div className="tracking text-sm text-secondary font-nunito-light flex items-center px-6 pt-3 pl-10">
              X{quantity}
            </div>
            <div className="text-secondary text-sm tracking uppercase font-bold pb-10">
              £{price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
