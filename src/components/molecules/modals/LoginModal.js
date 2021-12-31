import { FormField } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import React, { useState } from 'react'
import Modal from 'react-modal'



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "0px",
        border: 'none'
    },
};

function LoginModal() {

    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className='w-100%'>
            <div className='link' onClick={openModal}>Login</div>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={closeModal}
            >
                <div className='bg-gray-lighter w-100% pl-56 pr-57 py-40'>
                    <div className='font-avenir-reg text-2xl text-secondary tracking-wider leading-38 uppercase'>login</div>
                    <Button color='facebook' className='w-100% h-42 font-bold text-white tracking text-sm mt-20'>LOGIN WITH FACEBOOK</Button>
                    <Button color='instagram' className='w-100% h-42 tracking font-bold text-white text-sm  mt-20'>LOGIN WITH INSTAGRAM</Button>
                    <Button className='w-100% h-42 tracking text-sm mt-20'>LOGIN WITH PINTEREST</Button>

                    <div className='w-100% flex items-center justify-between mt-24'>
                        <div className='w-100% border-b border-border opacity-1'></div>
                        <div className='font-bold text-sm text-secondary tracking uppercase mx-10'>or</div>
                        <div className='w-100% border-b border-border opacity-1'></div>
                    </div>
                    <div className='font-bold text-sm tracking text-secondary leading-32 uppercase mt-10'>email address</div>
                    <FormField
                        className='w-100% h-38 pl-16 font-bold tracking font-bold text-sm outline-none leading-32 mt-11 text-gray uppercase '
                        placeholder="enter email here" />
                    <div className='font-bold text-sm tracking text-secondary leading-32 uppercase mt-10'>password</div>
                    <FormField
                        className='w-100% h-38 pl-16 font-bold tracking font-bold text-sm outline-none leading-32 mt-11 text-gray uppercase '
                        placeholder="enter password here" />
                    <Button className='w-37% h-41 flex tracking text-sm justify-center items-center mx-auto mt-27'>LOGIN</Button>
                    <div className='flex justify-between pr-20 mt-34'>
                        <div className='font-bold text-primary text-sm uppercase tracking leading-32'>login</div>
                        <div className='font-bold text-primary text-sm uppercase tracking leading-32'>forgot password</div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default LoginModal
