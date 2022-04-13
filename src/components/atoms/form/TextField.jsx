import { FormField } from 'components/app/forms';
import React from 'react';
import PropTypes from 'prop-types';

function TextField({
  placeholder = '',
  icon = false,
  label = 'Name',
  name = '',
  shadow = '',
  type = 'text',
  className = 'w-100% h-32',
  mb = 11,
  titleClasses = 'text-secondary uppercase tracking ',
  customChange,
}) {
  return (
    <div className="mb-10">
      <div
        className={`font-bold text-secondary text-sm leading-8 ${titleClasses} ${mb}`}
      >
        {label}
      </div>
      <div className="relative">
        <FormField
          type={type}
          name={name}
          className={`${className} ${shadow} bg-white outline-none  text-secondary placeholder-gray font-bold text-sm pl-8 py-5 tracking`}
          placeholder={placeholder}
          customChange={customChange}
        />
        {icon && (
          <img
            src="images/textinput/dateIcon.svg"
            className=" w-20 h-20 pointer-events-none absolute right-10 top-50% transform-y"
          />
        )}
      </div>
    </div>
  );
}

export default TextField;
