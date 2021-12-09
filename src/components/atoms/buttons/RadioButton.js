import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ value, checked = true, onChange }) {
  const imageClass = {};

  return (
    <div className="flex flex-row w-116 cursor-pointer" onClick={onChange}>
      <label class="radio-container">
        One
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
