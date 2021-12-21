import PropTypes from "prop-types";
import React from 'react'
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({ value, checked, onChange }) {
    return (

        <div className="flex flex-row w-100 cursor-pointer"  >
            <label className="checkbox-container font-bold text-secondary tracking uppercase pt-3">{value}
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
