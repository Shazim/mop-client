import React from 'react'

function RadioButton({ text, isClick = true, onChange }) {
    return (
        <div className="flex flex-row w-116" onClick={onChange} >

            <div className="w-20 h-20 border-2 border-gray rounded-full flex justify-center items-center">
                <div className={`w-10 h-10 bg-secondary rounded-full ${(isClick) ? "" : "invisible"}`}></div>
            </div>
            <div className="text-secondary font-nunito-bold ml-10">{text}</div>
        </div>
    )
}

export default RadioButton
