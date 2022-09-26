import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks';
import { getStock } from 'api/api-services';
import withArtistRoute from 'hoc/withArtistRoute';
import { AdminLayout } from 'Layout';
import Sliders from 'components/atoms/slider/Slider';

const StockRoomDetails = () => {
  const { id } = useParams();

  const { data: dataArtwork = [] } = useFetch(getStock, {
    variables: id,
  });

  const { images: sliderImages, name, price_sheet } = dataArtwork || [];

  return (
    <>
      <AdminLayout title="stock detail" button={true} buttonText="EDIT">
        <div className="max-screen mb-50 ">
          <Sliders
            column={1}
            images={sliderImages || []}
            titleClass="slick-image object-cover"
          />
        </div>
        <div className="max-screen flex w-100% pt-50  sm:flex-col sm:px-0">
          <div className=" w-50% md:w-45% sm:w-100% sm:px-23 sm:pb-62  pb-160 ">
            <p className="font-avenir-reg text-2xl text-dark tracking-wider leading-60 uppercase">
              {name}
            </p>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-primary rounded-full mt-5 mr-8"></div>
              <div className="border-b-2 border-black w-100% pt-6"></div>
            </div>
            {/* <p className="font-avenir-reg text-2xl text-primary tracking-wider leading-60 uppercase ">
              
            </p> */}

            {/* <p className="mt-33 font-avenir-reg text-secondary leading-32 text-xl text-justify">
              {notes}
            </p> */}
          </div>
          {price_sheet?.entries?.length > 0 && (
            <div className="w-40% md:w-25% sm:w-100% px-30 ml-50  mb-50 pb-40">
              <div className="font-avenir-reg text-2xl text-dark tracking-wider leading-60 uppercase ">
                Price Sheet
              </div>
              <div className="flex items-center">
                <div className="border-b-2 border-black w-100% pt-6"></div>
              </div>
              <div className="border-gray-200  border-2 mt-40 pl-30 pr-30 pb-50">
                <div className="mt-40 flex hr-b">
                  <div className="font-avenir-reg font-bold text-base text-secondary uppercase leading-54 tracking-wider flex-grow">
                    size
                  </div>
                  <div className="font-avenir-reg font-bold text-base text-secondary uppercase leading-54 tracking-wider ">
                    price
                  </div>
                </div>
                {price_sheet?.entries?.map((item) => (
                  <div className="mt-20 flex hr-b">
                    <div className="pb-10 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider flex-grow">
                      {item.size}
                    </div>
                    <div className="font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider ">
                      £{item.price}.oo
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default withArtistRoute(StockRoomDetails);
