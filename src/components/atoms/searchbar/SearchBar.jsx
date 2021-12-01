import React from 'react'
import '../../../index.css'
import { ReactComponent as Searchicon } from '../../../assets/images/searchIcon.svg';
import { FormField } from '../../app/forms';
import PropTypes from "prop-types";

function SearchBar({ classes = "w-243 h-32", transform = "", placeholder, bgColor = '' }) {
    return (
        <div className={`${classes} ${bgColor} pl-10 flex flex-row items-center`}>
            <Searchicon className=" w-16 h-16 mr-10 mt-2" />
            <FormField placeholder={placeholder} className={`${bgColor} ${transform} w-full tracking font-bold text-13 placeholder-secondary focus:outline-none`} />
        </div>
    )
}

SearchBar.propTypes = {
    classes: PropTypes.oneOf(["classes"]),
    value: PropTypes.oneOf(["some text"]),
    onChange: PropTypes.oneOf(["handler"]),
    transform: PropTypes.oneOf(["uppercase", "capitalize"]),
    placeholder: PropTypes.oneOf(["some text"]),
    checked: PropTypes.oneOf(["true", "false"]),
};

export default SearchBar
