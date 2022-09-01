import React from 'react';
import '../../../index.css';
import Input from 'components/app/common/Input';
import PropTypes from 'prop-types';

function SearchBar({
  name,
  className: classes = 'w-243 h-32 sm:w-200',
  textSize = 'text-xsm',
  transform = '',
  value = '',
  placeholder,
  bgColor = 'bg-white',
  onChange,
  onBlur,

  ...otherProps
}) {
  return (
    <div className={`${classes} ${bgColor} pl-10 flex items-center`}>
      <img
        src={window.location.origin + '/images/searchbar/searchIcon.svg'}
        className=" w-16 h-16 mr-10 mt-2"
      />
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`${bgColor} ${transform} ${textSize} sm:text-tiny w-full  tracking font-bold placeholder-secondary  custom-search`}
        {...otherProps}
      />
    </div>
  );
}

export default SearchBar;
