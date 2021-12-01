import React from 'react'
import PropTypes from "prop-types";

function RadioButton({ value, checked = true, onChange }) {
    return (
        <div className="flex flex-row w-116 cursor-pointer" onClick={onChange} >

            <div className="w-20 h-20 border-2 border-gray rounded-full flex justify-center items-center">
                <div className={`w-10 h-10 bg-secondary rounded-full ${(checked) ? "" : "invisible"}`}></div>
            </div>
            <div className="text-secondary font-bold ml-10">{value}</div>
        </div>
    )
}

RadioButton.propTypes = {
    value: PropTypes.oneOf(["some text"]),
    onChange: PropTypes.oneOf(["handler"]),
    checked: PropTypes.oneOf(["true", "false"]),
};


export default RadioButton
