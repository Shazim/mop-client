import React from 'react'

function Tables({
    filter = false,
    tableHeading = ["tax", "rate", "total rate", " on shipping"],
    obj = [
        {
            "tax": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365"
        },
        {
            "tax": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365"
        },
        {
            "tax": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365"
        },
        {
            "name": "Mr Dean Horlock",
            "rate": "12/10/21",
            "total rate": "190.00",
            "on shipping": "1,365"
        },
    ] }) {


    return (
        <div className='w-full bg-backgroundColor'>
            <table className='w-full'>
                <tr className='h-42 tracking-wider font-avenir-reg text-base uppercase border-b-2 border-gray bg-white'>
                    {tableHeading.map((heading, i) => {
                        return <td className='pl-18 font-medium'><div className='flex leading-5 text-secondary'>{heading} {filter ? <img className='-mt-6 link' src={`${i == 0 ? '/images/table/nameFilter.svg' : "/images/table/filterIcon.svg"}`} /> : ""}</div></td>
                    })}
                    <th></th>
                </tr>
                {obj.map((keys) => (
                    <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>{
                        Object.values(keys).map((value, index) => (
                            <td className="pl-18">{value}</td>
                        ))
                    }
                        {
                            filter
                                ? <td className='link'><img src='/images/table/downArrow.svg' /></td>
                                : <td className='tracking text-xl link'>...</td>
                        }
                    </tr>
                ))
                }
            </table>
        </div>
    )
}

export default Tables

