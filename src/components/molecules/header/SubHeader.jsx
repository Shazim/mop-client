import Button from 'components/atoms/buttons/Button'
import React from 'react'

export default function SubHeader({ title, subtitle = "order detailed", buttonText = "button", button = false, }) {
    console.log("MENU IS OPEN ", title)
    return (
        <div className='flex justify-between sm:flex-col bg-white pl-43 pr-45 sm:px-16'>
            <div className='my-auto sm:w-100% sm:flex sm:justify-between'>
                <p className='font-avenir-reg font-medium text-2xl uppercase text-primary tracking-wider leading-55'>{title}</p>
                <p className={`font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55 sm:hidden ${subtitle == "" && "hidden"}`}>{subtitle}</p>
                <p className='font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55 hidden sm:block'>reports</p>
            </div>
            <div className='flex sm:w-100% hidden justify-end'>
                <Button className='h-42 w-251 sm:w-100% my-35 hidden' color='primary'>{buttonText}</Button>
                <img className='w-6 ml-23' src='/images/menu/sub-menu.svg' />
            </div>
        </div>
    )
}
