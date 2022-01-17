import React from 'react';
import { Item } from '../Cart';

function Cart() {
  const prices = [
    { heading: 'subtotal', price: '£525.00' },
    { heading: 'vet', price: '£20.00' },
    { heading: 'total', price: '£525.00' },
  ];

  return (
    <div className="bg-gray-lighter m-auto pt-31 pb-27 pl-27 pr-33">
      {[...Array(3)].map(() => (
        <Item />
      ))}

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
