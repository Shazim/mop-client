import Button from 'components/atoms/buttons/Button';
import React from 'react';

function TitleBar({ title = 'pricing', btnText }) {
  return (
    <div className="shadow-sm bg-white">
      <div className=" max-screen py-29 flex justify-between">
        <div className="text-primary tracking-wider uppercase font-avenir-reg font-medium text-2xl">
          {title}
        </div>
        <div className="flex">
          {btnText && <Button className="w-251 h-42 mr-23">{btnText}</Button>}
          <img src="/images/menu/sub-menu.svg" className="link" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
