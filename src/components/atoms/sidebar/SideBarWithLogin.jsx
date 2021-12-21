import { FormField } from 'components/app/forms'
import React from 'react'
import { useState, useEffect } from 'react'
import CheckBox from '../checkbox/CheckBox'
import Menu from '../menu/Menu'
import SearchBar from '../searchbar/SearchBar'
import Button from '../buttons/Button'
import RadioMenu from '../menu/RadioMenu '
import Input from 'components/app/common/Input'


function SideBarWithLogin() {

    const [isOpen, setIsOpne] = useState(false)
    let initialObj = {
        "menu": {
            type: "checkbox",
            values: [
                { name: "item1", select: false },
                { name: "item2", select: false },
                { name: "item3", select: false }
            ]
        },
        "Radio Menu": {
            type: 'radio',
            values: [
                { name: "item1", select: false },
                { name: "item2", select: false },
                { name: "item3", select: false }
            ]
        },
        "menu 1": {
            type: "checkbox",
            values: [
                { name: "item1", select: false },
                { name: "item2", select: false },
                { name: "item3", select: false }
            ]
        },
        "minPrice": "",
        "search": "",
        "maxPrice": ""
    }
    const [filter, setFilter] = useState(initialObj)

    const clickHandler = () => setIsOpne(!isOpen)

    const handler = (item, index) => {
        const filters = { ...filter }
        const items = [...filters[item].values]
        items[index].select = !items[index].select;
        setFilter(filters)
    }

    const clearFilter = () => {
        setFilter(initialObj)
    }

    const handle_field = (e) => {
        if (e.target.name == "search") {
            const fils = { ...filter }
            fils[e.target.name] = e.target.value
            setFilter(fils)
        } else if (e.target.name == "minPrice") {
            const fils = { ...filter }
            fils[e.target.name] = e.target.value
            setFilter(fils)
        } else if (e.target.name == "maxPrice") {
            const fils = { ...filter }
            fils[e.target.name] = e.target.value
            setFilter(fils)
        }
    }

    return (
        <div className="h-screen w-294 bg-gray-lighter pt-40 overflow-auto">
            <SearchBar
                name="search"
                className="w-220 h-32 mx-auto mb-25"
                placeholder="search"
                transform="uppercase"
                onChange={(e) => handle_field(e)}
                value={filter.search} />
            {Object.entries(filter).map(([key, value]) => {
                if (typeof value !== "string") {
                    return (value.type !== "radio") ? <>
                        <Menu data={value.values} title={key} setData={handler} />
                        <div className=" h-1 bg-gray mx-36 my-16"></div>
                    </> : <>
                        <RadioMenu data={value.values} title={key} setData={handler} />
                        <div className=" h-1 bg-gray mx-36 my-16"></div>
                    </>
                }
            })}
            <div className="relative">
                <div className="flex justify-between px-36">
                    <div className="uppercase text-sm text-primary tracking font-bold">price</div>
                    <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
                </div>
                <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                    <div className="font-bold text-sm tracking uppercase text-secondary leading-8">MINIMUM</div>
                    <Input
                        name="minPrice"
                        type="number"
                        placeholder="enter price"
                        className="textfield focus:outline-none uppercase w-220 tracking h-32 font-bold text-sm pl-10 text-secondary"
                        onChange={(e) => handle_field(e)}
                        value={filter.minPrice} />

                    <div className="font-bold text-sm tracking uppercase text-secondary mt-10 leading-8">MAXIMUM</div>
                    <Input
                        name="maxPrice"
                        type="number"
                        className="textfield focus:outline-none uppercase tracking w-220 h-32 font-bold text-sm pl-10 text-secondary bg-white"
                        placeholder="enter price"
                        onChange={(e) => handle_field(e)}
                        value={filter.maxPrice}
                    />
                </div>
            </div>
            <Button
                className="flex w-220 h-33 text-secondary justify-center items-center mt-28 m-auto"
                color="bg-gray" onClick={clearFilter}>CLEAR FILTER</Button>

        </div>
    )
}

export default SideBarWithLogin
