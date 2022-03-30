import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({ className, value, ...props }) {
  return (
    <div className={`${className} flex cursor-pointer`}>
      <label
        className={`checkbox-container block pt-0 relative pl-30 link font-bold text-secondary tracking uppercase`}
      >
        {value}
        <input
          className="absolute opacity-0 link h-0 w-0"
          {...props}
          type="checkbox"
        />
        <span className="checkbox-checkmark absolute top-0 left-0 h-20 w-20 border-2 border-gray bg-white"></span>
      </label>
    </div>
  );
}

export default CheckBox;
