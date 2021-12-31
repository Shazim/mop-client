import { FormField } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import React, { useState } from 'react'
import Modal from 'react-modal'



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '50%',
        transform: 'translate(-50%, -50%)',
        padding: "0px",
        border: 'none',
        height: '96vh',
    },
};

function SignupModal() {
    const [customer, setCustomer] = useState(true)
    const [artist, setArtist] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const tabHandler = () => {
        setArtist(!artist)
        setCustomer(!customer)
    }


    return (
        <div>
            <div className='link' onClick={openModal}>Sign Up</div>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 overflow-auto"
            >
                <div className='bg-gray-lighter w-568 pl-56 pr-57 py-40'>
                    <div className='font-avenir-reg text-2xl text-secondary tracking-wider leading-38 uppercase'>sign up</div>
                    <Button color='facebook' className='w-100% h-42 tracking font-bold text-white text-sm mt-20'>LOGIN WITH FACEBOOK</Button>
                    <Button color='instagram' className='w-100% h-42 tracking font-bold text-white text-sm  mt-20'>LOGIN WITH INSTAGRAM</Button>
                    <Button className='w-100% h-42 tracking font-bold text-sm mt-20'>LOGIN WITH PINTEREST</Button>

                    <div className='w-100% flex items-center justify-between mt-24'>
                        <div className='w-100% border-b border-border opacity-1'></div>
                        <div className='font-bold text-sm mx-10 text-secondary tracking uppercase'>or</div>
                        <div className='w-100% border-b border-border opacity-1'></div>
                    </div>

                    <div className='w-100% border-b border-border opacity-1 pb-33 mb-33'>
                        <div className='font-bold text-sm tracking text-secondary leading-32 uppercase mt-10'>email address</div>
                        <FormField
                            className='w-100% h-38 pl-16 font-bold tracking font-bold text-sm outline-none leading-32 mt-5 text-gray uppercase '
                            placeholder="enter email here" />
                        <div className='font-bold text-sm tracking text-secondary leading-32 uppercase mt-10'>password</div>
                        <FormField
                            className='w-100% h-38 pl-16 font-bold tracking font-bold text-sm outline-none leading-32 mt-5 text-gray uppercase '
                            placeholder="enter password here" />
                        <div className='font-bold text-sm tracking text-secondary leading-32 uppercase mt-10'>confirm password</div>
                        <FormField
                            className='w-100% h-38 pl-16 font-bold tracking font-bold text-sm outline-none leading-32 mt-5 text-gray uppercase '
                            placeholder="confirm password here" />

                    </div>
                    <div className='w-100% border-b border-border opacity-1 pb-30 mb-20'>
                        <div className='font-bold text-black tracking leading-32 uppercase text-sm'>Choose the statement that best applies to you.</div>
                        <div className='flex justify-between mt-20'>
                            <div onClick={tabHandler} className={`w-48% link uppercase px-65 py-22 ${(customer) ? "bg-gray" : "bg-white"} text-sm text-secondary text-center tracking`}>custom account</div>
                            <div onClick={tabHandler} className={`w-48% link uppercase px-65 py-22 ${(artist) ? "bg-gray" : "bg-white"} text-sm text-secondary text-center tracking`}>artist account</div>
                        </div>
                        {(customer) ?
                            <div className='font-reg text-black text-base mt-20'>I want to be able to browse and buy artists work, but am not interested in selling my own art. </div>
                            : <div className='font-reg text-black text-base mt-20'>I want to be able to create my own gallery and sell my own art to a range of customers, as well as browse and buy work. </div>
                        }

                    </div>
                    <CheckBox className='w-full text-11' value="I would like to receive insightful updates and emails. " />

                    <Button className='w-42% h-41 flex tracking font-bold text-sm justify-center items-center mx-auto mt-12'>SIGN UP</Button>
                    <div className='flex justify-between pr-20 mt-14'>
                        <div className='font-bold text-primary text-sm uppercase tracking leading-32'>login</div>
                        <div className='font-bold text-primary text-sm uppercase tracking leading-32'>forgot password</div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SignupModal
