import React from 'react';
import Button from 'components/atoms/buttons/Button';
import { TextField } from 'components/atoms/form';

function ReceiveInsight({ image = '/images/girl.png' }) {
  return (
    <div className="flex border-border border-t ">
      <div className=" max-screen pt-101 w-40% ">
        <div>
          <div className="tracking-wider text-2xl uppercase font-avenir-reg pb-34">
            Receive insights and news from the worlds leading voices
          </div>
          <div className="mb-32">
            <TextField
              shadow="shadow"
              height="40"
              mb="10"
              label="First Name"
              tracking="none"
              textTransform="capitalize"
              color="text-secondary-dark"
            />
          </div>
          <div>
            <TextField
              shadow="shadow"
              height="40"
              label="Email Address"
              tracking="none"
              mb="10"
              textTransform="capitalize"
              color="text-secondary-dark"
            />
          </div>
          <Button className="w-251 mr-18 h-42 mt-44 mb-14">Subscribe</Button>
          <div className="text-primary capitalize font-nunito-light text-base link">
            See Terms & Conditions
          </div>
        </div>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default ReceiveInsight;
