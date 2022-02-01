import Button from 'components/atoms/buttons/Button'
import { TextField } from 'components/atoms/form'
import Layout from 'components/common/Layout'
import Footer from 'components/molecules/footer/Footer'
import Header from 'components/molecules/header/Header'
import SideBar from 'components/molecules/sidebar/SideBar'
import Tables from 'components/molecules/tables/Tables'
import React from 'react'

function OrderDetail() {
    return (<>
        <Header login={false} />
        <div className='flex bg-backgroundColor'>
            <SideBar />
            <div className='w-84% sm:w-100%'>
                <div className='flex justify-between bg-white pl-43 pr-45'>
                    <div>
                        <p className='font-avenir-reg font-medium text-2xl uppercase text-primary tracking-wider leading-55'>orders</p>
                        <p className='font-avenir-reg font-medium text-xl uppercase text-secondary tracking-wider leading-55'>order detailed</p>
                    </div>
                    <img src='/images/menu/sub-menu.svg' />
                </div>
                <div className='p-45 sm:p-18'>
                    <div className='flex justify-between mb-45 items-center sm:flex-col sm:p-30'>
                        <div className='w-3/12 sm:w-100%'>
                            <TextField height="37" width="100%" label="start date" placeholder="select a start date" />
                        </div>
                        <div className='w-3/12 sm:w-100%'>
                            <TextField height="37" width="100%" label="end date" placeholder="select a start date" />
                        </div>
                        <div className='w-5/12 flex justify-between sm:w-100%'>
                            <Button className='w-45% h-37 mt-22' color='gray'>UPDATE VIEW</Button>
                            <Button className='w-45% h-37 mt-22' color='gray'>RESET FILTER</Button>
                        </div>
                    </div>
                    <Tables filter={true} />
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default OrderDetail
