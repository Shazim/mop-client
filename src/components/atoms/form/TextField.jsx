import { FormField } from 'components/app/forms';
import React from 'react';
import PropTypes from 'prop-types';

function TextField({
  placeholder = '',
  mb = '0',
  label = 'Name',
  shadow = '',
  height = '32',
  width = '100%',
  color = 'text-secondary',
  tracking = 'tracking',
  textTransform = 'uppercase',
}) {
  return (
    <div>
      <div
        className={`font-bold ${color} text-sm ${textTransform} ${tracking} mb-${mb} `}
      >
        {label}
      </div>
      <FormField
        className={`bg-white ${shadow} h-${height} w-${width} outline-none uppercase text-secondary placeholder-gray font-bold text-sm pl-8 py-5 tracking`}
        placeholder={placeholder}
      />
    </div>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.oneOf(['some text']),
  mb: PropTypes.oneOf(['7', '25']),
  label: PropTypes.oneOf(['some text']),
};

export default TextField;
