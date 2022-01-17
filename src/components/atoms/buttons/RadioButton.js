import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ value, checked = true, onChange, label = 'Label' }) {
  const imageClass = {};

  return (
    <div className="flex w-100% cursor-pointer" onClick={onChange}>
      <label class="radio-container tracking font-bold uppercase text-sm text-secondary pt-2">
        {label}
        <input type="radio" name="radio" />
        <span class="radio-checkmark"></span>
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  value: PropTypes.oneOf(['some text']),
  onChange: PropTypes.oneOf(['handler']),
  checked: PropTypes.oneOf(['true', 'false']),
};

export default RadioButton;
