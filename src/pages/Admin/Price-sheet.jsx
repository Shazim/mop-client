import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PriceSheet = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          centerMode: true,
          dots: true,
          centerPadding: '0%',

          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <>
      <div className=" mt-31 font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        Price sheets
      </div>
      <div className="font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking ">
        available price sheets:
      </div>
      <div className="hidden sm:block">
        <Slider {...settings}>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Price Sheet 1
            </div>
          </div>
          <div>
            <div className="w-186 h-186 bg-gray "></div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Price Sheet 2
            </div>
          </div>
        </Slider>
      </div>
      <div className="mt-17 flex sm:hidden">
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
            Price Sheet 1
          </div>
        </div>
        <div>
          <div className="w-186 h-186 bg-gray "></div>
          <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
            Price Sheet 2
          </div>
        </div>
      </div>
      <div className=" mt-24 hr-b"></div>
      <div className=" mt-31 font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        Products
      </div>
      <div className="font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking ">
        available products:
      </div>
      <div className="hidden sm:block">
        <Slider {...settings}>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className=" w-186 flex justify-between">
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                Print
              </div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                £20
              </div>
            </div>
          </div>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className="w-186 flex justify-between">
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                Large Format
              </div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                £50
              </div>
            </div>
          </div>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className="w-186 flex justify-between">
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                Square Print
              </div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                £15
              </div>
            </div>
          </div>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className="w-186 flex justify-between">
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                Mounted Print
              </div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                £40
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="mt-17 flex sm:hidden">
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className="flex justify-between">
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Print
            </div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              £20
            </div>
          </div>
        </div>
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className="flex justify-between">
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Large Format
            </div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              £50
            </div>
          </div>
        </div>
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className="flex justify-between">
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Square Print
            </div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              £15
            </div>
          </div>
        </div>
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className="flex justify-between">
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Mounted Print
            </div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              £40
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-24 hr-b"></div>
      <div className=" mt-31 font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        Wall art
      </div>
      <div className="font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking ">
        available products:
      </div>
      <div className="hidden sm:block">
        <Slider {...settings}>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className=" w-186 flex justify-between">
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                Canvas Print
              </div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                £20
              </div>
            </div>
          </div>
          <div className="mr-35">
            <div className="w-186 h-186 bg-gray "></div>
            <div className=" w-186 flex justify-between">
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                metal Print
              </div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                £50
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="mt-17 flex sm:hidden">
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className=" flex justify-between">
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              Canvas Print
            </div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              £20
            </div>
          </div>
        </div>
        <div className="mr-35">
          <div className="w-186 h-186 bg-gray "></div>
          <div className="flex justify-between">
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              metal Print
            </div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              £50
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSheet;
