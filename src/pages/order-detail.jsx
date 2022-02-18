import Button from 'components/atoms/buttons/Button'
import { TextField } from 'components/atoms/form'
import Layout from 'components/common/Layout'
import Footer from 'components/molecules/footer/Footer'
import Header from 'components/molecules/header/Header'
import SubHeader from 'components/molecules/header/SubHeader'
import MobileMenu from 'components/molecules/mobilemenu/MobileMenu'
import SideBar from 'components/molecules/sidebar/SideBar'
import Tables from 'components/molecules/tables/Tables'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function OrderDetail() {
    const [isMenuOpen, setIsMenuOpen] = useState()
    return (<>
        <Header login={false} menu={isMenuOpen} isOpen={setIsMenuOpen} />
        <div className='flex bg-backgroundColor'>
            <div className='sm:hidden'>
                <SideBar />
            </div>
            <div className='w-84% md:w-89% sm:w-100%'>
                <SubHeader title={`${isMenuOpen ? "Menu" : "orders"}`} />
                {/* <div className='flex justify-between bg-white pl-43 pr-45'>
                    <div className='sm:w-100% sm:flex sm:justify-between'>
                        <p className='font-avenir-reg font-medium text-2xl uppercase text-primary tracking-wider leading-55'>orders</p>
                        <p className='font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55 sm:hidden'>order detailed</p>
                        <p className='font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55 hidden sm:block'>reports</p>
                    </div>
                    <img className='sm:hidden' src='/images/menu/sub-menu.svg' />
                </div> */}
                {(!isMenuOpen) ? <div className='px-45 pt-45 md:p-25 sm:p-18'>
                    <div className='flex justify-between mb-45 items-center xl:flex-col lg:flex-col md:flex-col sm:flex-col sm:p-30'>
                        <div className='w-55% flex justify-between xl:w-100% lg:w-100% md:w-100% sm:flex-col sm:w-100% '>
                            <div className='w-48% sm:w-100%'>
                                <TextField classes="h-37 w-100%" label="start date" placeholder="select a start date" />
                            </div>
                            <div className='w-48% sm:w-100%'>
                                <TextField classes="h-37 w-100%" label="end date" placeholder="select a start date" />
                            </div>
                        </div>
                        <div className='w-40% flex justify-between xl:w-100% xl:justify-between lg:w-100% lg:justify-between md:w-100% md:justify-between sm:w-100%'>
                            <Button className='w-45% h-37 mt-22 xl:w-48% lg:w-48% md:w-48% sm:w-45%' color='gray'>UPDATE VIEW</Button>
                            <Button className='w-45% h-37 mt-22 xl:w-48% lg:w-48% md:w-48% sm:w-45%' color='gray'>RESET FILTER</Button>
                        </div>
                    </div>
                    <Tables filter={true} />
                </div>
                    :
                    <MobileMenu />
                }
            </div>
        </div>
        <Footer />
    </>
    )
}

export default OrderDetail
