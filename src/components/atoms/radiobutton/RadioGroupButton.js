import React, { useState } from 'react'
import RadioButton from '../buttons/RadioButton'

function RadioGroupButton({ text, value }) {
    const [checked, setChecked] = useState(false)
    const handleClick = (checked) => {
        setChecked(checked)
    }
    return (
        <>
            <RadioButton value="Male" onChange={() => handleClick(true)} checked={checked} />
        </>
    )
}

export default RadioGroupButton
