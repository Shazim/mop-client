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
            <tr className='border-b border-gray bg-white lea'>
                <td className='pl-18'>
                    <p className='heading mt-17'>Customer name</p>
                    <p className={`${textClass} mb-17`}>{details["customer name"]}</p>
                </td>
                <td className='pl-18 w-25%'>
                    <p className='heading mt-17'>shipping address</p>
                    <p className={`${textClass} mb-17`}>{details["shipping address"]}</p>
                </td>
                <td className='pl-18'>
                    <p className='heading mt-17'>order date</p>
                    <p className={`${textClass} mb-17`}>{details["order date"]}</p>
                </td>
                <td className='pl-18'>
                    <p className='heading mt-17'>shipping date</p>
                    <p className={`${textClass} mb-17`}>{details["shipping date"]}</p>
                </td>
                <td></td>

            </tr>
            <tr className='border-b-2 border-gray bg-white'>
                <td className='pl-18 w-299'>
                    <img className='mt-38 mb-38' src={details['image'].url} />
                </td>
                <td className='pl-18 align-top pt-23'>
                    <p className='heading'>size</p>
                    <p className={textClass}>{details['image'].size}</p>
                    <p className='heading'>paper</p>
                    <p className={textClass}>{details['image'].paper}</p>
                    <p className='heading'>frame</p>
                    <p className={textClass}>{details['image'].frame}</p>

                </td>
                <td>

                </td>
                <td className='pl-18 align-top pt-23'>
                    <p className='heading'>order total</p>
                    <p className={textClass}>190.00</p>
                </td>
                <td></td>

            </tr>

        </>
    }

    return (
        <div className='w-full bg-backgroundColor'>
            <table className='w-full'>
                <tr className='h-42 tracking-wider font-avenir-reg text-base uppercase border-b-2 border-gray bg-white'>
                    {tableHeading.map((heading, i) => <td className='pl-18 font-medium'><div className='flex leading-5 text-secondary'>{heading} {filter ? <img className='-mt-6 link' src={`${i == 0 ? '/images/table/nameFilter.svg' : "/images/table/filterIcon.svg"}`} /> : ""}</div></td>)}
                    <th></th>
                </tr>
                {obj.map((keys, index) => (
                    <>
                        <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>{
                            Object.values(keys).map((value, i) => (
                                (typeof value != "object") && <td className="pl-18">{value}</td>
                            ))
                        }
                            {
                                filter
                                    ? <td className='link' onClick={() => handleId(index)}
                                    ><img className={`${(id == index) ? "transform rotate-180" : ""}`} src='/images/table/downArrow.svg' /></td>
                                    : <td className='tracking text-xl link'>...</td>
                            }

                        </tr>
                        {id == index && orderDetail(keys.details)}

                    </>
                ))
                }
            </table>
        </div>
    )
}

export default Tables

