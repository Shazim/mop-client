import React from 'react'
import { useState } from 'react'
import CheckBox from '../checkbox/CheckBox'

function SideBarWithLogin({ data, title, setData }) {
    const [isOpen, setIsOpne] = useState(false)
    console.log()
    const clickHandler = () => setIsOpne(!isOpen)
    return (
        <div className="relative">
            <div className="flex justify-between px-36">
                <div className="uppercase text-sm text-primary tracking font-bold">{title}</div>
                <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
            </div>
            <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                {data.map((item, index) => <div onClick={() => setData({ key: title, index: index })} className="mb-12"> <CheckBox value={item.name} checked={item.select} /> </div>)}
            </div>
        </div>
    )
}

export default SideBarWithLogin