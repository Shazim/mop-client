// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
import { useLazyFetch } from 'hooks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
// ====================== IMPORTED COMPONENTS ========================
import VideoCard from 'components/atoms/cards/VideoCard';
import Pagination from 'components/Pagination/Pagination';
import Container from 'Layout/Container';
// ====================== IMPORTED API ========================
import { getGalleryDetails } from 'api/api-services';
import withCustomerRoute from 'hoc/withCustomerRoute';

const GalleryDetail = ({ props }) => {
  const [handleGetGalleries, { data, loading }] =
    useLazyFetch(getGalleryDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const { exhibitions } = data || [];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    //initialSlide: 1,
    centerMode: true,
    centerPadding: '0%',
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
      {
        breakpoint: 459,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (id) {
      handleGetGalleries({ variables: id });
    }
  }, [id]);

  return (
    <Container>
      {loading && (
        <div className="w-100% flex items-center justify-center ">
          <TailSpin
            color="#C71118"
            height={80}
            width={80}
            ariaLabel="loading"
          />
        </div>
      )}
      <div className="flex pb-30 flex-col items-center pt-34 tracking-wider font-avenir-reg font-medium uppercase ">
        <div className="text-primary text-2xl">{data?.gallery_name}</div>
        <div className="text-secondary text-lg">{data?.artist_name}</div>
      </div>
      {exhibitions?.length > 0 ? (
        <div className="max-screen sm:px-23 sm:pb-70">
          <div className="mx-80 pb-30 grid grid-cols-2 gap-22 sm:hidden">
            {exhibitions?.map(({ room_name, views, image }) => (
              <VideoCard
                title={room_name}
                views={views}
                imageUrl={image ? image : undefined}
              />
            ))}
          </div>
          <div className="hidden sm:block">
            <Slider {...settings}>
              {exhibitions?.map(({ room_name, views, image }) => (
                <VideoCard
                  title={room_name}
                  views={views}
                  imageUrl={image ? image : undefined}
                />
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
      ) : (
        <div className="text-center justify-center pt-112">
          <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
            You have no Drafts Found
          </p>

          <img
            className="mx-auto w-180 h-180 mt-56 mb-491"
            src="/images/galleryIcon.svg"
          />
        </div>
      )}
    </Container>
  );
};

export default withCustomerRoute(GalleryDetail);
