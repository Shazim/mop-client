import { FormField } from 'components/app/forms'
import React, { useState } from 'react'
import "../../../index.css"

function MultipleOptions({ option = [{ id: 0, value: "item1" }, { id: 1, value: "item2" }, { id: 2, value: "item3" }, { id: 3, value: "item4" }, { id: 4, value: "item5" },], handler }) {
    const [text, setText] = useState("choose an option")
    const [hide, setHide] = useState(false)

    const displayItems = (name) => {
        setHide(!hide)
        setText(name)
        // handler(name)
    }
    return (
        <div class={`absolute flex flex-row-reverse w-300 h-32 cursor-pointer`} onClick={() => setHide(!hide)} >
            <select className="hidden">
                {option.map((item) => <option value={item.id}>{item.value}</option>)}

            </select>
            <div class="custom-arrow w-33 h-32 relative bg-gray-darkest"></div>
            <div class="select-selected py-8 px-22 w-534 tracking leading-4 bg-gray-lighter select-arrow-active uppercase">{text}</div>
            <div class={`${(hide) ? "hidden" : ""} select-items w-534 absolute top-100% text-secondary text-sm pl-22 left-0 tracking right-0 z-50 bg-gray-lightest leading-7`}>
                {option.map((item) => <div onClick={() => displayItems(item.value)}>{item.value}</div>)}
            </div>
        </div>
    )
}

export default MultipleOptions
