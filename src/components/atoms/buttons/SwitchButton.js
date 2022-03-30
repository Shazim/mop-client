import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SwitchButton({ active = true, onChange }) {
  return (
    <div
      className={`w-35 h-18 rounded-large bg-${
        active ? 'primary' : 'secondary'
      } p-2 cursor-pointer`}
      onClick={onChange}
    >
      <div
        className={`w-14 h-14 bg-white rounded-full ${
          active ? 'float-right' : ''
        }`}
      ></div>
    </div>
  );
}
SwitchButton.propTypes = {
  active: PropTypes.oneOf([true, false]),
};
export default SwitchButton;
