import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({
  value,
  checked,
  onChange,
  label = 'I would like to receive insightful updates and emails. ',
}) {
  return (
    <div className="flex w-100% cursor-pointer" onClick={onChange}>
      <label className="pt-2 checkbox-container font-bold text-xsm tracking uppercase text-secondary">
        {label}
        <input type="checkbox" />
        <span className="checkbox-checkmark"></span>
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  value: PropTypes.oneOf(['some text']),
  onChange: PropTypes.oneOf(['handler']),
  checked: PropTypes.oneOf(['true', 'false']),
};
export default CheckBox;
