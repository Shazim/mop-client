// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
// ====================== IMPORTED COMPONENT ========================
import { Item } from '../Cart';
import { getCookie, setCookie } from 'cookies/Cookies';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_PRICE } from 'store/actions/actionTypes';

function Cart() {
  const [cartItems, setCartItems] = useState(
    (getCookie('obj') && JSON.parse(getCookie('obj'))) || []
  );
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const price = cartItems.map(({ quantity, price }, index) => {
      return quantity * price;
    });

    let totPrice = 0;
    for (let i = 0; i < price.length; i++) {
      totPrice += price[i];
    }
    setSubTotal(totPrice);
  }, [cartItems]);
  const vet = 20.0;
  const Total = subTotal + vet;
  const dispatch = useDispatch();
  dispatch({ type: TOTAL_PRICE, payload: Total });

  const prices = [
    { heading: 'subtotal', price: `£${subTotal || ''}` },
    { heading: 'vat', price: `£${vet}` },
    { heading: 'total', price: `£${Total || vet}` },
  ];
  return (
    <div className="bg-gray-lighter h-fit w-312 pt-31 pb-27 pl-27 pr-33">
      {cartItems.map(
        (
          { artwork_images, artwork_name, artist_name, price, quantity },
          index
        ) => (
          <Item
            index={index}
            image={artwork_images}
            artworkName={artwork_name}
            artistName={artist_name}
            artworkPrice={price}
            setCartItems={setCartItems}
            artworkQuantity={quantity}
          />
        )
      )}
      <div>
        {prices.map((item) => (
          <div className="flex justify-between">
            <div className="text-secondary uppercase tracking font-bold">
              {item.heading}
            </div>
            <div className="text-primary tracking font-bold">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
