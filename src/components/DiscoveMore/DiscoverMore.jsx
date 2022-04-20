import Button from 'components/atoms/buttons/Button';
import React from 'react';

function DiscoverMore({ background = 'bg-white' }) {
  return (
    <div className={`${background}`}>
      <div
        className={`py-136 sm:py-80 sm:px-23 m-auto w-40% xl:w-50% lg:w-60% md:w-70% sm:w-100%`}
      >
        <div className="text-2xl sm:text-lg text-secondary-dark tracking-wider font-avenir-reg uppercase text-center">
          If you are a photographer looking to exhibit we have the tools and
          support to help you reach more clients
          <span className="text-primary">.</span>
        </div>
        <div className="text-lg sm:text-base font-nunito-light text-center pt-28 pb-26 leading-38">
          Using our suite of tools and mentorship program we can help you grow
          in terms of skills and reach. Click below to find out how much we
          offer and the different ways we can help you.
        </div>
        <Button className="w-251 h-51 mx-auto block">
          Discover More Today
        </Button>
      </div>
    </div>
  );
}

export default DiscoverMore;
