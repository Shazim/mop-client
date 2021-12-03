import Button from 'components/atoms/buttons/Button';
import React from 'react';

function DiscoverMore({ background = 'bg-white' }) {
  return (
    <div className={`py-136 ${background}`}>
      <div className="text-2xl text-secondary tracking-wider uppercase text-center">
        If you are a photographer looking to exhibit we have the tools and
        support to help you reach more clients.
      </div>
      <div className="text-lg font-light text-center pt-28 pb-26">
        Using our suite of tools and mentorship program we can help you grow in
        terms of skills and reach. Click below to find out how much we offer and
        the different ways we can help you.
      </div>
      <Button className="w-251 h-51 mx-auto block">Discover More Today</Button>
    </div>
  );
}

export default DiscoverMore;
