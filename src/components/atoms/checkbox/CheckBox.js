import PropTypes from "prop-types";
import React from 'react'
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({ className = "w-100", labelStyles = "text-13", value, checked, onChange }) {
    return (

        <div className={`${className} flex cursor-pointer`}  >
            <label className={`${labelStyles} checkbox-container font-bold text-secondary tracking uppercase pt-3`}>{value}
                <input type="checkbox" checked={checked} onChange={onChange} />
                <span className="checkbox-checkmark"></span>
            </label>
        </div>
    )
}

CheckBox.propTypes = {
    value: PropTypes.oneOf(["some text"]),
    onChange: PropTypes.oneOf(["handler"]),
    checked: PropTypes.oneOf(["true", "false"]),
};
export default CheckBox
