import React from 'react'
import { useState } from 'react'
import RadioButton from '../buttons/RadioButton'
import CheckBox from '../checkbox/CheckBox'
import Input from "../../../components/app/common/Input"

function Menu({ filter, data, title, setData }) {

    const [isOpen, setIsOpne] = useState(false)
    const clickHandler = () => setIsOpne(!isOpen)
    return (
        <div className="relative">
            <div className="flex justify-between px-36 link" onClick={clickHandler}>
                <div className="uppercase text-sm text-primary tracking font-bold">{title}</div>
                <img className={`${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" />
            </div>
            <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                {data.values.map((item, index) => {
                    if (data.type == "checkbox") {
                        return <div className="mb-12">
                            <CheckBox onChange={() => setData(title, index, "")} value={item.name} checked={item.select} />
                        </div>
                    } else if (data.type == "radio") {
                        return <div className="mb-12">
                            <RadioButton value={item.name} checked={item.select} onChange={() => setData(title, index, "")} />
                        </div>
                    } else {
                        return <>
                            <div className="font-bold text-sm tracking uppercase text-secondary leading-8">{item.name}</div>
                            <Input
                                name={item.name}
                                type="number"
                                placeholder="enter price"
                                className="textfield focus:outline-none uppercase w-220 tracking h-32 font-bold text-sm pl-10 text-secondary"
                                onChange={(e) => setData(title, index, e.target.value)}
                                value={filter[title].values[index].value} />
                        </>
                    }
                }
                )}
            </div>
            {(data.type !== "input") ? <div className=" h-1 bg-gray mx-36 my-16"></div> : <></>}
        </div>
    )
}

export default RadioMenu