import React from 'react';
import { Item } from '../Cart';

function Cart({ prices }) {
  return (
    <div className="bg-gray-lighter h-fit w-312 pt-31 pb-27 pl-27 pr-33">
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
