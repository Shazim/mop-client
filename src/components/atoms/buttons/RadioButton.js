import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ className: classes = "", value, checked, onChange }) {
  const imageClass = {};


  return (
    <div className={`${classes} flex w-100% cursor-pointer`} onClick={onChange}>
      <label class="radio-container block relative pl-30 mb-4 link font-bold text-secondary tracking uppercase pt-3 ">
        {value}
        <input checked={checked} className='absolute opacity-0 link' type="radio" name="radio" />
        <span className='radio-checkmark absolute top-0 left-0 h-20 w-20 bg-white border-2 border-gray rounded-full'></span>
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
