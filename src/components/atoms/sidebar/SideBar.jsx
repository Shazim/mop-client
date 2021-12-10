import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const obj = [
    {
        key: "my gallery",
        item: [{
            icon: "/images/sidebar/exhibitionroom.svg",
            redIcon: "/images/sidebar/exhibitionroom_red.svg",
            name: "Exhibition Rooms",
            link: "/exhibition"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "Stockrooms"

        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "gallery"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "Analytic"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "settings"
        }]
    },
    {
        key: "store",
        item: [{
            icon: "/images/sidebar/stockroom.svg",
            name: "pricing and products"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "orders"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "customers"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "tax rates"
        },
        {
            icon: "/images/sidebar/stockroom.svg",
            name: "Coupons and offers"
        }]
    },]
function SideBar() {
    return (
        <div className="h-screen w-294 bg-gray-lighter pt-40">
            {obj.map((item, index) => {
                return <div className="">
                    <div className="font-bold text-sm text-secondary tracking uppercase mt-15 mb-18 ml-37">{item.key}</div>
                    <>{
                        item.item.map((subItem, subIndex) =>
                            <Link to={subItem.link}>
                                <span className="flex w-275 h-55 bg-gray rounded-r-lg pl-62 link" onClick={() => handleClick(index, subIndex)}>
                                    <img className="w-19 h-19 my-auto text-primary" src={(subItem.link == window.location.pathname) ? subItem.redIcon : subItem.icon} />
                                    <div className={`my-auto font-nunito-semibold capitalize text-base leading-5 ml-28 ${(subItem.link == window.location.pathname) ? "text-primary" : "text-secondary"} `}>{subItem.name}</div>
                                </span>
                            </Link>
                        )
                    }</>
                </div>

            })}
        </div>
    )
}

export default SideBar
