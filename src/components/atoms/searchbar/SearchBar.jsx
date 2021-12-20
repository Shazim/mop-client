import React from 'react';
import '../../../index.css';
import { ReactComponent as Searchicon } from '../../../assets/images/searchIcon.svg';
import { FormField } from '../../app/forms';
import PropTypes from 'prop-types';

function SearchBar({ name, className: classes = "w-243 h-32", textSize = "text-xsm", transform = "", value = "", placeholder, bgColor = 'bg-white', onChange }) {
  return (
    <div className={`${classes} ${bgColor} pl-10 flex flex-row items-center`}>
      <Searchicon className=" w-16 h-16 mr-10 mt-2" />
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${bgColor} ${transform} ${textSize} w-full tracking font-bold placeholder-secondary focus:outline-none`} />
    </div>
  )
}

SearchBar.propTypes = {
  classes: PropTypes.oneOf(['classes']),
  value: PropTypes.oneOf(['some text']),
  onChange: PropTypes.oneOf(['handler']),
  transform: PropTypes.oneOf(['uppercase', 'capitalize']),
  textSize: PropTypes.oneOf(['text-xsm', 'text-sm']),
  placeholder: PropTypes.oneOf(['some text']),
  checked: PropTypes.oneOf(['true', 'false']),
};

export default SearchBar;
