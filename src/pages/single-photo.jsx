// ====================== IMPORTED LIBRARIES ========================
import { useFetch } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// ====================== IMPORTED COMPONENTS ========================
import Sliders from 'components/atoms/slider/Slider';
import AddCart from 'components/molecules/addcart/AddCart';
import { Container } from 'Layout';
import { setCookie } from 'cookies/Cookies';

// ====================== IMPORTED api ========================
import { getPublicArtWork } from 'api/api-services';
import withCustomerRoute from 'hoc/withCustomerRoute';

const SinglePhoto = (props) => {
  const [artwork, setArtwork] = useState({});

  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
  ];

  const { id } = useParams()

  const { data: dataArtwork = [] } = useFetch(getPublicArtWork, {
    variables: id,
  });
  const {
    images: sliderImages,
    artist_name,
    name,
    notes,
    more_by_this_artist,
    price_sheet,
  } = dataArtwork || [];

  return (
    <Container>
      <div className="max-screen pt-50  sm:w-100% sm:px-23 sm:h-100% sm:bg-gray-dark">
        <Sliders column={1} images={sliderImages || []} />
      </div>
      <div className="max-screen flex w-100% pt-115 sm:bg-gray-dark sm:flex-col sm:px-0">
        <div className="w-50% md:w-45% sm:w-100% sm:px-23 sm:pb-62">
          <p className="font-avenir-reg text-2xl text-dark tracking-wider leading-60 uppercase">
            {name}
          </p>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-primary rounded-full mt-5 mr-8"></div>
            <div className="border-b-2 border-black w-100% pt-6"></div>
          </div>
          <p className="font-avenir-reg text-2xl text-primary tracking-wider leading-60 uppercase">
            {artist_name}
          </p>

          <p className="mt-33 font-avenir-reg text-secondary leading-32 text-xl">
            {notes}
          </p>
        </div>
        <div className="w-50% md:w-55% flex sm:flex-col justify-end sm:p-23 sm:w-100% sm:bg-white">
          <AddCart
            id={id}
            sizes={price_sheet}
            artwork_name={name}
            artist={artist_name}
            images={sliderImages}
          />
          <div className="hidden sm:block mt-24 w-100% border-border border-b"></div>
        </div>
      </div>
      <div className="max-screen w-100% mt-60 sm:mt-24 pt-90 sm:pt-0 sm:px-23">
        <p className="font-avenir-reg text-2xl sm:text-xl text-secondary-dark tracking-wider leading-60 sm:leading-38 uppercase mb-19">
          More by this artist
        </p>
        <div className="sm:hidden flex grid grid-cols-4 gap-33 w-100% h-100% mb-86">
          {more_by_this_artist?.slice(0, 4).map(({ images, orientation }) => (
            <>
              {images?.map(({ image, featured_image }) => {
                return featured_image ? (
                  <img className="w-100% h-100%" src={image} />
                ) : (
                  false
                );
              })}
            </>
          ))}
        </div>
        <div className="hidden sm:block">
          <Sliders column={1.2} dots={true} images={sliderImages || []} />
        </div>
      </div>
    </Container>
  );
};

export default withCustomerRoute(SinglePhoto);
