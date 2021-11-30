import React, { useState } from 'react'

function SwitchButton({ isOn, onChange }) {
    const [on, setOn] = useState(isOn)
    const handleClick = () => {
        setOn(on => {
            if (onChange) onChange(!on)
            return !on
        })



    }
    return (
        <div className={`w-35 h-18 rounded-large bg-${(isOn || on) ? "primary-dark" : "secondary"} p-2`} onClick={handleClick}>
            <div className={`w-14 h-14 bg-white rounded-full ${(isOn || on) ? "float-right" : ""}`}></div>
        </div>
    )
}

export default SwitchButton
