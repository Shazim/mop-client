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
            redIcon: "/images/sidebar/stockroom_red.svg",
            icon: "/images/sidebar/stockroom.svg",
            name: "Stockrooms",
            link: "/stockrooms"
        },
        {
            redIcon: "/images/sidebar/gallery_red.svg",
            icon: "/images/sidebar/gallery.svg",
            link: "/gallery",
            name: "gallery"
        },
        {
            redIcon: "/images/sidebar/analytics_red.svg",
            icon: "/images/sidebar/analytics.svg",
            link: "/Analytic",
            name: "Analytic",
        },
        {
            redIcon: "/images/sidebar/settings_red.svg",
            icon: "/images/sidebar/settings.svg",
            name: "settings",
            link: "/settings"

        }]
    },
    {
        key: "store",
        item: [{
            redIcon: "/images/sidebar/price_red.svg",
            icon: "/images/sidebar/price.svg",
            name: "pricing and products",
            link: "/coupon"
        },
        {
            redIcon: "/images/sidebar/order_red.svg",
            icon: "/images/sidebar/order.svg",
            name: "orders",
            link: "/orders"
        },
        {
            redIcon: "/images/sidebar/profile_red.svg",
            icon: "/images/sidebar/profile.svg",
            name: "customers",
            link: "/customers"
        },
        {
            redIcon: "/images/sidebar/tax_red.svg",
            icon: "/images/sidebar/tax.svg",
            name: "tax rates",
            link: "/tax"
        },
        {
            redIcon: "/images/sidebar/coupon_red.svg",
            icon: "/images/sidebar/coupon.svg",
            name: "Coupons and offers",
            link: "/coupon"
        }]
    },]
function SideBar({ routBack = true }) {
    const handleClick = (index, subIndex) => {
    }
    return (
        <div className="h-screen w-294 bg-gray-lighter pt-40 pr-19 overflow-auto">
            {routBack ?
                <>
                    {obj.map((item, index) => {
                        return <div>
                            <div className="font-bold text-sm text-secondary tracking uppercase mt-15 mb-18 ml-37">{item.key}</div>
                            <>{
                                item.item.map((subItem, subIndex) =>
                                    <a href={`${subItem.link}`}>
                                        <span className="flex w-275 h-55 bg-secondary-dim rounded-r-lg pl-62 link" onClick={() => handleClick(index, subIndex)}>
                                            <img className="w-19 h-19 my-auto text-primary" src={(subItem.link == window.location.pathname) ? subItem.redIcon : subItem.icon} />
                                            <div className={`my-auto font-nunito-semibold capitalize text-base leading-5 ml-28 ${(subItem.link == window.location.pathname) ? "text-primary" : "text-secondary"} `}>{subItem.name}</div>
                                        </span>
                                    </a>
                                )
                            }</>
                        </div>

                    })}
                </> :
                <a >
                    <span className="flex w-275 h-55 bg-secondary-dim justify-between rounded-r-lg pl-37 link pr-15" >
                        <div className={`my-auto font-bold uppercase text-base leading-5 text-secondary `}>Back</div>
                        <img className="w-14 h-13 my-auto text-primary" src='images/sidebar/leftArrow.svg' />
                    </span>
                </a>
            }
        </div>
    )
}

export default SideBar
