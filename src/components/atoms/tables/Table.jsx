import React from 'react'

function Table() {
    return (
        <div className='w-full bg-backgroundColor'>
            <table className='w-full'>
                <tr className='h-42 tracking-wider font-avenir-reg text-base uppercase border-b border-gray bg-white'>
                    <td className='pl-18'>tax</td>
                    <td className='pl-18'>rate</td>
                    <td className='pl-18'>total rate</td>
                    <td className='pl-18'>on shipping</td>
                    <td className='pl-18'>on digital</td>
                    <td className='pl-18'></td>
                </tr>
                <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>
                    <td className='pl-18'>uk</td>
                    <td className='pl-18'>+2%</td>
                    <td className='pl-18'>2%</td>
                    <td className='pl-18'>yes</td>
                    <td className='pl-18'>yes</td>
                    <td className='tracking text-xl'>...</td>
                </tr>
                <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>
                    <td className='pl-18'>uk</td>
                    <td className='pl-18'>+2%</td>
                    <td className='pl-18'>2%</td>
                    <td className='pl-18'>yes</td>
                    <td className='pl-18'>yes</td>
                    <td className='tracking text-xl'>...</td>
                </tr>
                <tr className='h-60 border-b capitalize text-base font-reg text-black border-gray '>
                    <td className='pl-18'>uk</td>
                    <td className='pl-18'>+2%</td>
                    <td className='pl-18'>2%</td>
                    <td className='pl-18'>yes</td>
                    <td className='pl-18'>yes</td>
                    <td className='tracking text-xl'>...</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
