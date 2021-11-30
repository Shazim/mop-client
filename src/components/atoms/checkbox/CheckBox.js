import React from 'react'
import { ReactComponent as RedMark } from '../../../assets/images/redtick.svg';

function CheckBox({ text }) {
    return (

        <div className="flex flex-row w-100" >

            <div className="w-20 h-20 border-2 border-gray  flex justify-center items-center">
                <RedMark className={`w-12 h-10 `} />
            </div>
            <div className="text-secondary font-nunito-bold ml-10">{text}</div>
        </div>
    )
}

export default CheckBox
