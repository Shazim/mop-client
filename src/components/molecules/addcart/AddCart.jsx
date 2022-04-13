import Button from 'components/atoms/buttons/Button';
import SelectOptions from 'components/atoms/form/SelectOptions';
import React from 'react';

function AddCart() {
  return (
    <div className="h-578 w-80% xl:w-90% lg:w-93% md:w-93% sm:w-100% bg-gray-lighter flex flex-col px-42 sm:px-20 pt-20 pb-40 shadow">
      <p className="font-avenir-reg text-secondary-dark text-2xl sm:text-xl tracking-wider sm:text-center leading-60 sm:leading-38 uppercase">
        buy this artwork
      </p>
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-14">
        Select Size
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select size"
      />
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-16">
        Select frame type
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select type"
      />
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-16">
        Select slip mount size
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select size"
      />
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-16">
        Select print material type
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select type"
      />
      <div className="mt-16 flex justify-between">
        <p className="font-avenir-reg text-primary text-2xl leading-60 tracking-wider uppercase">
          price
        </p>
        <p className="font-avenir-reg text-primary text-2xl leading-60 tracking-wider">
          £175
        </p>
      </div>
      <Button className="w-100% h-42">Add to cart</Button>
    </div>
  );
}

export default AddCart;
