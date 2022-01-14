import React from 'react'

function FilterTable() {
    return (
        <div className='w-full bg-backgroundColor'>
            <table className='w-full'>
                <tr className='h-42 tracking-wider font-avenir-reg text-base uppercase border-b border-gray bg-white'>
                    <td className='pl-18'><div className='flex leading-5'>name <img className='-mt-6' src='/images/table/nameFilter.svg' /></div></td>
                    <td className='pl-18 text-center'><div className='flex'>customer since <img src='/images/table/filterIcon.svg' /></div></td>
                    <td className='pl-18'><div className='flex'>last purchase <img src='/images/table/filterIcon.svg' /></div></td>
                    <td className='pl-18'><div className='flex'>total purchases <img src='/images/table/filterIcon.svg' /></div></td>
                    <td className='pl-18'></td>
                </tr>
                <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>
                    <td className='pl-18'>Mr dean horlok</td>
                    <td className='pl-5%'>12/10/21</td>
                    <td className='pl-5%'>&#163;190.00</td>
                    <td className='pl-5%'>&#163;1,365</td>
                    <td className=''><img src='/images/table/downArrow.svg' /></td>

                </tr>
                <tr className='h-60 text-black capitalize text-base font-reg border-b border-gray'>
                    <td className='pl-18'>Mr dean horlok</td>
                    <td className='pl-5%'>12/10/21</td>
                    <td className='pl-5%'>&#163;190.00</td>
                    <td className='pl-5%'>&#163;1,365</td>
                    <td className=''><img src='/images/table/downArrow.svg' /></td>
                </tr>
                <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>
                    <td className='pl-18'>Mr dean horlok</td>
                    <td className='pl-5%'>12/10/21</td>
                    <td className='pl-5%'>&#163;190.00</td>
                    <td className='pl-5%'>&#163;1,365</td>
                    <td className=''><img src='/images/table/downArrow.svg' /></td>

                </tr>
                <tr className='h-60 text-black capitalize text-base font-reg border-b border-gray'>
                    <td className='pl-18'>Mr dean horlok</td>
                    <td className='pl-5%'>12/10/21</td>
                    <td className='pl-5%'>&#163;190.00</td>
                    <td className='pl-5%'>&#163;1,365</td>
                    <td className=''><img src='/images/table/downArrow.svg' /></td>
                </tr>
            </table>
        </div>
    )
}

export default FilterTable
