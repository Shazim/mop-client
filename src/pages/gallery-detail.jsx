import VideoCard from 'components/atoms/cards/VideoCard';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import React, { useEffect, useState } from 'react';
import { useLazyFetch } from 'hooks';
import { getGalleryDetails } from 'api/api-services';
import Pagination from 'components/Pagination/Pagination';
import Container from 'Layout/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function GallaryDetail(props) {
  const [handleGetGalleries, { data }] = useLazyFetch(getGalleryDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '0%',
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1.3,
          centerMode: true,
          dots: true,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
      {
        breakpoint: 459,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (id) {
      handleGetGalleries({ variables: 1 });
    }
  }, [id]);

  return (
    <Container>
      <div className="flex pb-30 flex-col items-center pt-34 tracking-wider font-avenir-reg font-medium uppercase ">
        <div className="text-primary text-2xl">{data?.gallery_name}</div>
        <div className="text-secondary text-lg">{data?.artist_name}</div>
      </div>
      <div className="max-screen sm:px-23 sm:pb-70">
        <div className="mx-80 pb-30 grid grid-cols-2 gap-22 sm:hidden">
          {data?.exhibitions?.map(({ room_name, views, image }) => (
            <VideoCard
              title={room_name}
              views={views}
              imageUrl={image ? image : undefined}
            />
          ))}
        </div>
        <div className="hidden sm:block">
          <Slider {...settings}>
            {data?.exhibitions?.map(({ room_name, views, image }) => (
              <VideoCard title={room_name} views={views} imageUrl={image} />
            ))}
          </Slider>
        </div>
        <Pagination
          pageDetails={data?.pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          className="mt-15 mb-63"
        />
      </div>
    </Container>
  );
}

export default GallaryDetail;
