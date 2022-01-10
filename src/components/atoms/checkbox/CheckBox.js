import PropTypes from "prop-types";
import React from 'react'
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({ className = "w-100% text-sm", value, checked, onChange }) {
    return (

        <div className={`${className} flex cursor-pointer`}  >
            <label className={`checkbox-container block relative pl-30 mb-1 link font-bold text-secondary tracking uppercase pt-3`}>{value}
                <input className="absolute opacity-0 link h-0 w-0" type="checkbox" checked={checked} onChange={onChange} />
                <span className="checkbox-checkmark absolute top-0 left-0 h-20 w-20 border-2 border-gray bg-white"></span>
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
