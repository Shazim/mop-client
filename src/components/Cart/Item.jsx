import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies/Cookies';

function Item({
  artistName = 'Artist Name',
  artworkName = 'artwork Name',
  image,
  index,
  artworkPrice,
  setCartItems,
  artworkQuantity,
}) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(artworkPrice * artworkQuantity);
  const addQuantity = () => {
    setCartItems((prev) => {
      let copyPrev = [...prev];
      copyPrev[index].quantity = artworkQuantity + 1;
      setCookie('obj', JSON.stringify(copyPrev));

      return copyPrev;
    });
    setPrice(artworkPrice * (artworkQuantity + 1));
  };
  const subtractQuantity = () => {
    setCartItems((prev) => {
      let copyPrev = [...prev];

      copyPrev[index].quantity = artworkQuantity > 1 ? artworkQuantity - 1 : 1;
      setCookie('obj', JSON.stringify(copyPrev));

      return copyPrev;
    });
    setPrice(artworkPrice * (artworkQuantity > 1 ? artworkQuantity - 1 : 1));
  };
  const deleteProduct = () => {
    setCartItems((prev) => {
      let copyPrev = [...prev];

      copyPrev.splice(index, 1);
      setCookie('obj', JSON.stringify(copyPrev));
      return copyPrev;
    });
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
                className="link "
                onClick={subtractQuantity}
              />
              <div className="tracking text-sm text-secondary font-nunito-light flex items-center px-6 pt-3">
                {artworkQuantity}
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
            <img src={image} alt="" className="w-120 h-80 object-cover" />
            <div>
              <div className="text-primary text-sm tracking uppercase font-bold pb-28">
                £{price}
              </div>
              <img
                src="/images/cart/delete.svg"
                className="link"
                alt=""
                onClick={deleteProduct}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block ">
        <div className="flex hr-b pt-10">
          <div className="w-44 h-31">
            <img src={image} alt="" className=" w-100% h-100% object-cover" />
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
              X{artworkQuantity}
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
