import Button from 'components/atoms/buttons/Button';
import React from 'react';

export default function SubHeader({
  handler,
  title = 'title',
  subtitle,
  buttonText = 'button',
  button = false,
  className,
}) {
  return (
    <div className="bg-white hr-form-t">
      <div
        className={`${className} w-100% flex shadow-sm justify-between sm:flex-col px-43 h-112 sm:h-48 sm:px-16`}
      >
        <div className="my-auto sm:w-100% sm:flex sm:justify-between">
          <p className="font-avenir-reg font-medium text-2xl sm:text-lg uppercase text-primary tracking-wider ">
            {title}
          </p>
          <p
            className={`font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55 sm:hidden ${
              subtitle == '' && 'hidden'
            }`}
          >
            {subtitle}
          </p>
          {/* <p className="font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55 hidden sm:block">
          reports
        </p> */}
        </div>
        <div className="flex sm:w-100% justify-end">
          <Button
            onClick={() => handler()}
            className={`h-42 w-251 sm:hidden my-35 ${button ? '' : 'hidden'}`}
            color="primary"
          >
            {buttonText}
          </Button>
          <img
            className="w-6 ml-23 sm:hidden"
            src="/images/menu/sub-menu.svg"
          />
        </div>
      </div>
    </div>
  );
}
