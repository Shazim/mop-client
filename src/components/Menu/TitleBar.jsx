import React from 'react';

function TitleBar({ title = 'pricing' }) {
  return (
    <div className="shadow-sm bg-white">
      <div className=" max-screen py-29 flex justify-between">
        <div className="text-primary tracking-wider uppercase font-avenir-reg font-medium text-2xl">
          {title}
        </div>
        <img src="/images/menu/sub-menu.svg" alt="" />
      </div>
    </div>
  );
}

export default TitleBar;
