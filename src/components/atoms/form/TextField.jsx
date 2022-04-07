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
  classes = 'w-100% h-32',
  titleClasses = 'text-secondary uppercase tracking mb-11',
}) {
  return (
    <div className="mb-10">
      <div
        className={`font-bold text-secondary text-sm leading-8 ${titleClasses} `}
      >
        {label}
      </div>
      <div className="relative">
        <FormField
          type={type}
          name={name}
          className={`${classes} ${shadow} bg-white outline-none  text-secondary placeholder-gray font-bold text-sm pl-8 py-5 tracking`}
          placeholder={placeholder}
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

TextField.propTypes = {
  placeholder: PropTypes.oneOf(['some text']),
  mb: PropTypes.oneOf(['7', '25']),
  label: PropTypes.oneOf(['some text']),
  name: PropTypes.oneOf(['some text']),
};

export default TextField;
