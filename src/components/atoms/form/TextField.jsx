import { FormField } from 'components/app/forms';
import React from 'react';

function TextField({
  placeholder = '',
  icon = false,
  label = 'Name',
  name = '',
  shadow = '',
  width = '100%',
  type = 'text',
  className = 'w-100%',
  mb = 11,
  titleClasses = 'text-secondary uppercase tracking',
  customChange,
  readOnly = false,
  autoComplete = 'off',
  otherProps,
}) {
  return (
    <div className={`w-${width}`}>
      <div
        className={`font-bold text-secondary text-sm leading-22 ${titleClasses} mb-${mb}`}
      >
        {label}
      </div>
      <div className="relative">
        <FormField
          type={type}
          name={name}
          className={`${className} ${shadow} `}
          placeholder={placeholder}
          customChange={customChange}
          readOnly={readOnly}
          autoComplete={autoComplete}
          {...otherProps}
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
