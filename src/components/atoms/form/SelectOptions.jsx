import { FormField } from 'components/app/forms'
import React, { useState } from 'react'
import { useStore } from 'store'
import "../../../index.css"

function SelectOptions({ option = [{ value: 0, label: "item4" }, { value: 1, label: "item2" }, { value: 2, label: "item3" }, { value: 3, label: "item4" }, { value: 4, label: "item5" },], handler }) {
    const [text, setText] = useState("choose an option")
    const [hide, setHide] = useState(false)
    const [value, setValue] = useState(0)
    const displayItems = (name, value) => {
        setHide(!hide)
        setText(name)
        setValue(value)
    }
    return (
        <div class={`absolute flex flex-row-reverse w-300 h-32 cursor-pointer`} onClick={() => setHide(!hide)} >
            <select className="hidden">
                {option.map((item) => <option value={item.value}>{item.label}</option>)}

            </select>
            <div class="custom-arrow w-33 h-32 relative bg-gray-darkest"></div>
            <div class="select-selected py-8 px-22 w-534 tracking leading-4 font-bold text-sm bg-gray-lighter select-arrow-active uppercase">{text}</div>
            <div class={`${(hide) ? "hidden" : ""} font-bold uppercase select-items w-534 absolute top-100% text-secondary text-sm pl-22 left-0 tracking right-0 z-50 bg-gray-lightest leading-7`}>
                {option.map((item) => <div onClick={() => displayItems(item.label, item.value)}>{item.label}</div>)}
            </div>
        </div>
    )
}

export default SelectOptions
