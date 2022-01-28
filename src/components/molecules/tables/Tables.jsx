import React, { useState } from 'react'

function Tables({
    filter = false,
    isOpen, handler,
    tableHeading = ["tax", "rate", "total rate", " on shipping"],
    obj = [
        {
            "tax": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365",
            "details": {
                "customer name": "mr dean horlock",
                "shipping address": "2 Green Street, Poole. BH14 6HG",
                "order date": "01/10/21",
                "shipping date": "01/10/21",
                "order total": "190.00",
                "image": {
                    "size": "14 X 11 (36 x 28cm)",
                    "paper": "lustre",
                    "frame": "Wood, Light",
                    "url": '/images/table/tree.png'
                }
            }
        },
        {
            "tax": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365",
            "details": {
                "customer name": "mr dean horlock2",
                "shipping address": "2 Green Street, Poole. BH14 6HG",
                "order date": "01/10/21",
                "shipping date": "01/10/21",
                "order total": "190.00",
                "image": {
                    "size": "14 X 11 (36 x 28cm)",
                    "paper": "lustre",
                    "frame": "Wood, Light",
                    "url": '/images/table/tree.png'
                }
            }
        },
        {
            "tax": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365",
            "details": {
                "customer name": "mr dean horlock",
                "shipping address": "2 Green Street, Poole. BH14 6HG",
                "order date": "01/10/21",
                "shipping date": "01/10/21",
                "order total": "190.00",
                "image": {
                    "size": "14 X 11 (36 x 28cm)",
                    "paper": "lustre",
                    "frame": "Wood, Light",
                    "url": '/images/table/tree.png'
                }
            }
        },
        {
            "name": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365",
            "details": {
                "customer name": "mr dean horlock",
                "shipping address": "2 Green Street, Poole. BH14 6HG",
                "order date": "01/10/21",
                "shipping date": "01/10/21",
                "order total": "190.00",
                "image": {
                    "size": "14 X 11 (36 x 28cm)",
                    "paper": "lustre",
                    "frame": "Wood, Light",
                    "url": '/images/table/tree.png'
                }
            }
        },
    ] }) {

    const [id, setId] = useState()
    const handleId = (i) => {
        setId(prev => prev == i ? null : i)
    }

    const orderDetail = (details) => {
        const textClass = "font-reg text-base leading-6 text-black capitalize"
        return <>
            <div className='border-b flex border-gray bg-white'>
                <div className='w-40% pl-18'>
                    <p className='heading mt-17'>Customer name</p>
                    <p className={`${textClass} mb-17`}>{details["customer name"]}</p>
                </div>
                <div className='pl-18 w-40%'>
                    <p className='heading mt-17'>shipping address</p>
                    <p className={`${textClass} mb-17`}>{details["shipping address"]}</p>
                </div>
                <div className='pl-18 w-40%'>
                    <p className='heading mt-17'>order date</p>
                    <p className={`${textClass} mb-17`}>{details["order date"]}</p>
                </div>
                <div className='pl-18 w-40%'>
                    <p className='heading mt-17'>shipping date</p>
                    <p className={`${textClass} mb-17`}>{details["shipping date"]}</p>
                </div>
                <div className='w-60'></div>

            </div>
            <div className='border-b-2 flex border-gray bg-white'>
                <div className='pl-18 w-40%'>
                    <img className='w-100% mt-38 mb-38' src={details['image'].url} />
                </div>
                <div className='pl-18 w-40% align-top pt-23'>
                    <p className='heading'>size</p>
                    <p className={textClass}>{details['image'].size}</p>
                    <p className='heading'>paper</p>
                    <p className={textClass}>{details['image'].paper}</p>
                    <p className='heading'>frame</p>
                    <p className={textClass}>{details['image'].frame}</p>

                </div>
                <div className='w-40%'>

                </div>
                <div className='pl-18 w-40% align-top pt-23'>
                    <p className='heading'>order total</p>
                    <p className={textClass}>190.00</p>
                </div>
                <div className='w-60'></div>

            </div>

        </>
    }

    return (
        <div className='w-full bg-backgroundColor'>
            <div className='w-full'>
                <div className='h-42 w-full flex items-center tracking-wider font-avenir-reg text-base uppercase border-b-2 border-gray bg-white'>
                    {tableHeading.map((heading, i) => <div className='w-40% pl-18 flex-1 font-medium'><div className='flex leading-5 text-secondary'>{heading} {filter ? <img className='-mt-6 link' src={`${i == 0 ? '/images/table/nameFilter.svg' : "/images/table/filterIcon.svg"}`} /> : ""}</div></div>)}
                    <div className='w-40'></div>
                </div>
                {obj.map((keys, index) => (
                    <>
                        <div className='h-60 flex items-center border-b capitalize text-base pr-20 font-reg text-black border-gray '>{
                            Object.values(keys).map((value, i) => (
                                (typeof value != "object") && <div className="w-30% pl-18">{value}</div>
                            ))
                        }
                            {
                                filter
                                    ? <div className='link' onClick={() => handleId(index)}
                                    ><img className={`${(id == index) ? "transform rotate-180" : ""}`} src='/images/table/downArrow.svg' /></div>
                                    : <div className='tracking text-xl link'>...</div>
                            }

                        </div>
                        {id == index && orderDetail(keys.details)}

                    </>
                ))
                }
            </div>
        </div>
    )
}

export default Tables

