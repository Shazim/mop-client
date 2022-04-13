import GridLayout from 'components/atoms/cards/GridLayout';
import Sliders from 'components/atoms/slider/Slider';
import AddCart from 'components/molecules/addcart/AddCart';
import React from 'react';

function SinglePhoto() {
  return (
    <>
      <div className="max-screen sm:bg-gray-dark">
        <Sliders />
      </div>
      <div className="max-screen flex w-100% pt-115 sm:bg-gray-dark sm:flex-col sm:px-0">
        <div className="w-50% md:w-45% sm:w-100% sm:px-23 sm:pb-62">
          <p className="font-avenir-reg text-2xl text-dark tracking-wider leading-60 uppercase">
            item name
          </p>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-primary rounded-full mt-5 mr-8"></div>
            <div className="border-b-2 border-black w-100% pt-6"></div>
          </div>
          <p className="font-avenir-reg text-2xl text-primary tracking-wider leading-60 uppercase">
            By Artist Name
          </p>

          <p className="mt-33 font-avenir-reg text-secondary leading-32 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            metus sed facilisis sit lacus. Eget natoque fermentum netus faucibus
            mi. Dictum pellentesque viverra mattis in orci. Euismod aliquam
            metus venenatis, nunc interdum fermentum nunc. Interdum aliquet
            varius nunc phasellus. Et amet nunc elit tellus diam enim nunc nisi,
            dapibus. Habitant nunc proin eget faucibus. Urna, at elementum
            commodo, dolor. Vel erat enim sit nisl.
          </p>
          <p className="mt-33 font-avenir-reg text-secondary leading-32 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            metus sed facilisis sit lacus. Eget natoque fermentum netus faucibus
            mi. Dictum pellentesque viverra mattis in orci. Euismod aliquam
            metus venenatis, nunc interdum fermentum nunc. Interdum aliquet
            varius nunc phasellus. Et amet nunc elit tellus diam enim nunc nisi,
            dapibus. Habitant nunc proin eget faucibus. Urna, at elementum
            commodo, dolor. Vel erat enim sit nisl.
          </p>
        </div>
        <div className="w-50% md:w-55% flex sm:flex-col justify-end sm:p-23 sm:w-100% sm:bg-white">
          <AddCart />
          <div className="hidden sm:block mt-24 w-100% border-border border-b"></div>
        </div>
      </div>
      <div className="max-screen w-100% mt-60 pt-90">
        <p className="font-avenir-reg text-2xl text-secondary-dark tracking-wider leading-60 uppercase mb-19">
          More by this artist
        </p>
        <div>IMAGES HERE</div>
      </div>
    </>
  );
}

export default SinglePhoto;
