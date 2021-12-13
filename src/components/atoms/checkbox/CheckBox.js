import PropTypes from "prop-types";
import React from 'react'
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({ value, checked, onChange }) {
    return (

        <div className="flex flex-row w-100 cursor-pointer" onClick={onChange} >
            <label className="checkbox-container font-bold tracking uppercase">One
                <input type="checkbox" />
                <span className="checkbox-checkmark"></span>
            </label>

            {/* <div className="w-20 h-20 border-2 border-gray  flex justify-center items-center">
                <RedMark className={`w-12 h-10 ${(checked) ? "" : "invisible"}`} />
            </div>
            <div className="text-secondary mt-2 text-sm font-bold ml-10">{value}</div> */}
        </div>
    )
}

CheckBox.propTypes = {
    value: PropTypes.oneOf(["some text"]),
    onChange: PropTypes.oneOf(["handler"]),
    checked: PropTypes.oneOf(["true", "false"]),
};
export default CheckBox
