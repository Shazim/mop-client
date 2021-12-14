import { FormField } from 'components/app/forms'
import React from 'react'
import { useState, useEffect } from 'react'
import CheckBox from '../checkbox/CheckBox'
import Menu from '../menu/Menu'
import SearchBar from '../searchbar/SearchBar'
import Button from '../buttons/Button'
function SideBarWithLogin({ }) {
    const [isOpen, setIsOpne] = useState(false)
    const [filter, setFilter] = useState({
        "menu": [
            { name: "item1", select: false },
            { name: "item2", select: false },
            { name: "item3", select: false }
        ]
    })
    const [item, setItem] = useState({})


    useEffect(() => {
        handler()
        return () => {
            // cleanup
        }
    }, [filter, item])

    const clickHandler = () => setIsOpne(!isOpen)
    const object = {
        // title: 'photography type',
        "menu": [
            { name: "item1", select: false },
            { name: "item2", select: false },
            { name: "item3", select: false }
        ]
    }

    const handler = () => {
        // if (!item) {

        console.log("ITEM", item)
        // if (filter[item.key][item.index].select) {
        //     delete filter[item.key][item.index].select
        //     filter[item.key][item.index].select = false

        // } else {
        //     delete filter[item.key][item.index].select
        //     filter[item.key][item.index].select

        // }

        // }
    }

    return (
        <div className="h-screen w-294 bg-gray-lighter pt-40 overflow-auto">
            <SearchBar className="w-220 h-32 mx-auto mb-25" placeholder="search" transform="uppercase" />
            {/* <Menu data={object} setData={setItem} />
            <div className=" h-1 bg-gray mx-36 my-16"></div>
            <Menu data={object} setData={handler} />
            <div className=" h-1 bg-gray mx-36 my-16"></div>
            <Menu data={object} setData={handler} />
            <div className=" h-1 bg-gray mx-36 my-16"></div>
            <Menu data={object} setData={handler} />
            <div className=" h-1 bg-gray mx-36 my-16"></div> */}
            {Object.entries(filter).map(([key, value]) => {
                return <>
                    <Menu data={value} title={key} setData={setItem} />
                    <div className=" h-1 bg-gray mx-36 my-16"></div>
                </>
            })}
            <div className="relative">
                <div className="flex justify-between px-36">
                    <div className="uppercase text-sm text-primary tracking font-bold">price</div>
                    <img className={`link ${isOpen ? "" : "transform rotate-45"}`} src="images/sidebar/cross.svg" onClick={clickHandler} />
                </div>
                <div className={`pt-10 px-36 ${isOpen ? "" : "hidden"}`} >
                    <div className="font-bold text-sm tracking uppercase text-secondary leading-8">MINIMUM</div>
                    <FormField placeholder="enter price" className="uppercase w-220 h-32 font-bold text-sm pl-10 text-gray" />
                    <div className="font-bold text-sm tracking uppercase text-secondary mt-10 leading-8">MAXIMUM</div>
                    <FormField placeholder="enter price" className="uppercase w-220 h-32 font-bold text-sm pl-10 text-gray" />
                </div>
            </div>
            <Button className="flex w-220 h-33 text-secondary justify-center items-center mt-28 m-auto" color="bg-gray">CLEAR FILTER</Button>

        </div>
    )
}

export default SideBarWithLogin
