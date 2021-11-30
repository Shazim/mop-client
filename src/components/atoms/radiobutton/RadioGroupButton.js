import React, { useState } from 'react'
import RadioButton from './RadioButton'

function RadioGroupButton() {
    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        setChecked(!checked)
    }
    return (
        <>
            <RadioButton text="Male" onChange={handleClick} isClick={checked} />
            <RadioButton text="Female" isClick={!checked} onChange={handleClick} />
        </>
    )
}

export default RadioGroupButton
