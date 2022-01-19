import React from 'react'

function FilterTable({ filter = true }) {

    const obj = [
        {
            "name": "Mr Dean Horlock",
            "customer since": "12/10/21",
            "last purchase": "190.00",
            "total purchases": "1,365"
        },
        {
            "name": "Mr Dean Horlock",
            "customer since": "12/10/21",
            "last purchase": "190.00",
            "total purchases": "1,365"
        },
        {
            "name": "Mr Dean Horlock",
            "customer since": "12/10/21",
            "last purchase": "190.00",
            "total purchases": "1,365"
        },
        {
            "name": "Mr Dean Horlock",
            "customer since": "12/10/21",
            "last purchase": "190.00",
            "total purchases": "1,365"
        },
    ]

    return (


        <div className='w-full bg-backgroundColor'>
            <table className='w-full'>
                <tr className='h-42 tracking-wider font-avenir-reg text-base uppercase border-b-2 border-gray bg-white'>
                    {Object.keys(obj[0]).map((keys, i) => {
                        return <th className='pl-18'><div className='flex leading-5 text-secondary'>{keys} {filter ? <img className='-mt-6' src={`${i == 0 ? '/images/table/nameFilter.svg' : "/images/table/filterIcon.svg"}`} /> : ""}</div></th>
                    })}
                    <th></th>
                </tr>
                {obj.map((keys) => (
                    <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>{
                        Object.values(keys).map((value, index) => (
                            <td className={`${index == 0 ? "pl-18" : "pl-3%"}`}>{value}</td>
                        ))
                    }
                        {filter ? <td className=''><img src='/images/table/downArrow.svg' /></td> : <td className='tracking text-xl'>...</td>}
                    </tr>
                ))
                }
            </table>
        </div >
    )
}

export default FilterTable
