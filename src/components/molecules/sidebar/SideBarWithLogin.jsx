import React from 'react'
import { useState, useEffect } from 'react'
import Menu from '../menu/Menu'
import SearchBar from '../../atoms/searchbar/SearchBar'
import Button from '../../atoms/buttons/Button'


function SideBarWithLogin() {
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
                { name: "item9", select: false },
                { name: "item5", select: false },
                { name: "item8", select: false }
            ]
        },
        "menu 1": {
            type: "radio",
            values: [
                { name: "item2", select: false },
                { name: "item2", select: false },
                { name: "item3", select: false }
            ]
        },
        "price": {
            type: "input",
            values: [
                { name: "Minimum", value: "" },
                { name: "Maximum", value: "" },
            ]
        },
        "minPrice": "",
        "search": "",
        "maxPrice": ""
    }
    const [filter, setFilter] = useState(initialObj)

    const handler = (item, index, value) => {
        const copyFilters = { ...filter }
        const items = [...copyFilters[item].values]
        if (copyFilters[item].type == "checkbox") {
            items[index].select = !items[index].select;
            setFilter(copyFilters)
        } else if (copyFilters[item].type == "radio") {
            items.map((item, i) => {
                item.select = (index == i) ? true : false
            })
            copyFilters[item].values = [...items]
            setFilter(copyFilters)
        } else {
            copyFilters[item].values[index].value = value
            setFilter(copyFilters)
        }
    }

    const clearFilter = () => {
        setFilter(initialObj)
    }

    const handle_field = (e) => {
        if (e.target.name == "search") {
            const copyFilter = { ...filter }
            copyFilter[e.target.name] = e.target.value
            setFilter(copyFilter)
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
                    return <Menu data={value} filter={filter} title={key} setData={handler} />
                }
            })}

            <Button
                className="flex w-220 h-33 text-secondary justify-center items-center mt-28 m-auto"
                color="bg-gray" onClick={clearFilter}>CLEAR FILTERS</Button>

        </div>
    )
}

export default SideBarWithLogin
