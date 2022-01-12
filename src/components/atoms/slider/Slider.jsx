import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Sliders() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div className='hidden'><img className='' src='/images/slider/rightArrow.svg' /></div>,
        prevArrow: <div className='hidden'><img className='' src='/images/slider/leftArrow.svg' /> </div>,
        centerMode: true,
        centerPadding: '0%',
        responsive: [
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1.15,
                    centerMode: true,
                    centerPadding: '0%',
                    transformEnabled: true,
                },
            },
        ],
    };
    return (
        <div className='vw-90 mx-auto slider-dots sm:slider-arrow'>
            <Slider  {...settings}>

                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
                <div>
                    <img className='w-80% m-auto' src='/images/slider/image.png' />
                </div>
            </Slider>
        </div>
    )
}

export default Sliders
