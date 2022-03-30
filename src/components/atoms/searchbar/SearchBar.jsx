import React from 'react';
import '../../../index.css';
import Input from 'components/app/common/Input';
import PropTypes from 'prop-types';

function SearchBar({
  name,
  className: classes = 'w-243 h-32',
  textSize = 'text-xsm',
  transform = '',
  value = '',
  placeholder,
  bgColor = 'bg-white',
  onChange,
}) {
  return (
    <div className={`${classes} ${bgColor} pl-10 flex items-center`}>
      <img
        src="images/searchbar/searchIcon.svg"
        className=" w-16 h-16 mr-10 mt-2"
      />
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${bgColor} ${transform} ${textSize} w-full tracking font-bold placeholder-secondary focus:outline-none`}
      />
    </div>
  );
}

export default SearchBar;
