import React from 'react'
import { useState } from 'react'
import RadioButton from '../buttons/RadioButton'
import CheckBox from '../checkbox/CheckBox'
import Input from "../../../components/app/common/Input"

function Menu({ filter, data, title, setData, field }) {

    const [isOpen, setIsOpne] = useState(false)
    const clickHandler = () => setIsOpne(!isOpen)
    return (
        <>
            {
                (typeof data !== "string") ?
                    (data.type == "checkbox") ?
                        <> <div className="relative">
                            <div className="flex justify-between px-36">
                                <div className="uppercase text-sm text-primary tracking font-bold">{title}</div>
                                <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
                            </div>
                            <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                                {data.values.map((item, index) => <div className="mb-12">
                                    <CheckBox onChange={() => setData(title, index)} value={item.name} checked={item.select} />
                                </div>
                                )}
                            </div>
                        </div>
                            <div className=" h-1 bg-gray mx-36 my-16"></div>
                        </>
                        : (data.type == "radio") ?
                            <>
                                <div className="relative">
                                    <div className="flex justify-between px-36">
                                        <div className="uppercase text-sm text-primary tracking font-bold">{title}</div>
                                        <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
                                    </div>
                                    <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                                        {data.values.map((item, index) => <div className="mb-12">
                                            <RadioButton value={item.name} checked={item.select} onChange={() => setData(title, index)} />
                                        </div>)}
                                    </div>
                                </div>
                                <div className=" h-1 bg-gray mx-36 my-16"></div>
                            </>
                            : <div className="relative">
                                <div className="flex justify-between px-36">
                                    <div className="uppercase text-sm text-primary tracking font-bold">{title}</div>
                                    <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
                                </div>
                                <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >

                                    {data.values.map((item, index) => <>
                                        <div className="font-bold text-sm tracking uppercase text-secondary leading-8">{item.name}</div>
                                        <Input
                                            name={item.name}
                                            type="number"
                                            placeholder="enter price"
                                            className="textfield focus:outline-none uppercase w-220 tracking h-32 font-bold text-sm pl-10 text-secondary"
                                            onChange={(e) => field(title, e, index)}
                                            value={filter[title].values[index].value} />
                                    </>
                                    )}

                                </div>
                            </div>
                    : <></>
            }

        </>
    )
}

export default RadioMenu