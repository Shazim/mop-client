import { FormField } from 'components/app/forms'
import Button from 'components/atoms/buttons/Button'
import TextField from 'components/atoms/form/TextField';
import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'


function ForgotPassword({ userEmail, resetHandler, loginHandler, signUpHandler }) {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className='link' onClick={openModal}>Forgot Password</div>
            <Modal
                isOpen={isOpen}
                className="absolute border-0 top-50% left-50% transform-xy"
                onRequestClose={closeModal}>
                <div className='bg-gray-lighter w-568 pl-56 pr-57 py-40'>
                    <div className='font-avenir-reg text-2xl mb-15 text-secondary tracking-wider leading-38 uppercase'>forgot password</div>
                    <TextField placeholder="Enter email here" mb="6" height="38" label="Email Address" />
                    <Button className='w-38% h-41 flex tracking text-sm justify-center items-center mx-auto mt-27'>SEND RESET</Button>
                    <div className='flex justify-between pr-20 mt-34'>
                        <div className='font-bold text-primary text-sm uppercase tracking leading-32'>login</div>
                        <div className='font-bold text-primary text-sm uppercase tracking leading-32'>sign up</div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ForgotPassword
