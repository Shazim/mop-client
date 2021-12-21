import React from 'react'
import { useState } from 'react'
import RadioButton from '../buttons/RadioButton'
import CheckBox from '../checkbox/CheckBox'

function RadioMenu({ data, title, setData }) {

    const [isOpen, setIsOpne] = useState(false)
    const clickHandler = () => setIsOpne(!isOpen)
    return (
        <div className="relative">
            <div className="flex justify-between px-36">
                <div className="uppercase text-sm text-primary tracking font-bold">{title}</div>
                <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
            </div>
            <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                {data.map((item, index) => <div className="mb-12">
                    <RadioButton value={item.name} checked={item.select} onChange={() => setData(title, index)} />
                </div>)}
            </div>
        </div>
    )
}

export default RadioMenu