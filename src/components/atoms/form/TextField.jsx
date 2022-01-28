import { FormField } from 'components/app/forms';
import React from 'react';
import PropTypes from 'prop-types';

function TextField({
  placeholder = '',
  mb = '0',
  icon = true,
  label = 'Name',
  shadow = '',
  height = '32',
  width = '100%',
  color = 'text-secondary',
  tracking = 'tracking',
  textTransform = 'uppercase',
}) {
  return (
    <div className='mb-10'>
      <div
        className={`font-bold ${color} text-secondary text-sm ${textTransform} ${tracking} leading-8 mb-${mb} `}
      >
        {label}
      </div>
      <div className='relative'>
        <FormField
          className={`bg-white ${shadow} h-${height} w-${width} outline-none uppercase text-secondary placeholder-gray font-bold text-sm pl-8 py-5 tracking`}
          placeholder={placeholder}
        />
        {icon && <img src="images/textinput/dateIcon.svg" className=" w-20 h-20 pointer-events-none absolute right-10 top-50% transform-y" />}
      </div>
    </div>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.oneOf(['some text']),
  mb: PropTypes.oneOf(['7', '25']),
  label: PropTypes.oneOf(['some text']),
};

export default TextField;
