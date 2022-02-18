import { FormField } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import TextField from 'components/atoms/form/TextField';
import React, { useState } from 'react'
import Modal from 'react-modal'

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
                className="absolute border-0 top-50% left-50% transform-xy"
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 overflow-auto"
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
                    <div className='mt-12'>
                        <TextField placeholder="Enter email here" mb="6" height="38" label="Email Address" />
                        <TextField placeholder="enter password here" mb="6" height="38" label="password" />
                        <Button className='w-37% h-41 flex tracking text-sm justify-center items-center mx-auto mt-27'>LOGIN</Button>
                    </div>
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
