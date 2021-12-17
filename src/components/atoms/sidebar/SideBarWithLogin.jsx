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
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState({
        "menu": [
            { name: "item1", select: false },
            { name: "item2", select: false },
            { name: "item3", select: false }
        ],
        "Radio Menu": [
            { name: "item1", select: false },
            { name: "item2", select: false },
            { name: "item3", select: false }
        ],
        "minPrice": "",
        "search": "",
        "maxPrice": ""
    })

    useEffect(() => {
        handlePrice()
    }, [minPrice, maxPrice, search])

    const clickHandler = () => setIsOpne(!isOpen)

    const handler = (item, index) => {
        const filters = { ...filter }
        const items = [...filters[item]]
        items[index].select = !items[index].select;
        setFilter(filters)
    }

    const clearFilter = () => {
        Object.entries(filter).map(([key, value]) => {
            if (typeof value !== "string") {
                value.map((item, index) => {
                    const filters = { ...filter }
                    const filterItem = [...filter[key]]
                    filterItem[index].select = false
                    setFilter(filters)
                })
            } else {
                filter[key] = ""
                setMinPrice("")
                setMaxPrice("")
                setSearch("")
                // console.log("ITEMMM  ", filter.minPrice)
                setFilter(filter)

            }
        })
    }

    const handlePrice = () => {
        filter["minPrice"] = minPrice
        filter["maxPrice"] = maxPrice
        filter["search"] = search
        console.log("FILTER ", filter)
        setFilter(filter)
    }

    return (
        <div className="h-screen w-294 bg-gray-lighter pt-40 overflow-auto">
            <SearchBar className="w-220 h-32 mx-auto mb-25" placeholder="search" transform="uppercase" onChange={(e) => setSearch(e.target.value)} value={search} />
            {/* <Menu data={object} setData={setItem} />
            <div className=" h-1 bg-gray mx-36 my-16"></div>
            <Menu data={object} setData={handler} />
            <div className=" h-1 bg-gray mx-36 my-16"></div>
            <Menu data={object} setData={handler} />
            <div className=" h-1 bg-gray mx-36 my-16"></div>
            <Menu data={object} setData={handler} />
            <div className=" h-1 bg-gray mx-36 my-16"></div> */}
            {Object.entries(filter).map(([key, value]) => {
                if (typeof value !== "string") {
                    return (key !== "Radio Menu") ? <>
                        <Menu data={value} title={key} setData={handler} />
                        <div className=" h-1 bg-gray mx-36 my-16"></div>
                    </> : <>
                        <RadioMenu data={value} title={key} setData={handler} />
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
                        className="textfield focus:outline-none uppercase w-220 h-32 font-bold text-sm pl-10 text-secondary"
                        onChange={(text) => setMaxPrice(text.target.value)}
                        value={maxPrice} />

                    <div className="font-bold text-sm tracking uppercase text-secondary mt-10 leading-8">MAXIMUM</div>
                    <Input
                        name="maxPrice"
                        type="number"
                        className="textfield focus:outline-none uppercase w-220 h-32 font-bold text-sm pl-10 text-secondary bg-white"
                        placeholder="enter price"
                        onChange={(text) => setMinPrice(text.target.value)}
                        value={minPrice}
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
