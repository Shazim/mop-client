// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link, useLocation } from 'react-router-dom';
import { useLazyFetch } from 'hooks';
import { TailSpin } from 'react-loader-spinner';

// ====================== IMPORTED COMPONENTS ========================
import GalleryBar from 'components/GalleryBar/GalleryBar';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SelectOptions from 'components/atoms/form/SelectOptions';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import Button from 'components/atoms/buttons/Button';
import Pagination from 'components/Pagination/Pagination';
import Container from 'Layout/Container';
import { routes } from 'routes';

// ====================== IMPORTED api ========================
import { getGalleries, getArtists } from 'api/api-services';
import { getPublicExhibitions } from 'api';

const Gallery = () => {
  const location = useLocation();
  const { pathname = '' } = location || {};
  console.log({ location })
  const [tab, setTab] = useState(location.pathname.slice(1));
  const [handleGetGalleries, { data, status }] = useLazyFetch(getGalleries);
  const [handleGetArtists, { data: dataArtists }] = useLazyFetch(getArtists);
  const [handleGetExhibitions, { data: dataExhibitions }] =
    useLazyFetch(getPublicExhibitions);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  useEffect(() => {
    if (dataArtists) setIsLoading(false);
  }, [dataArtists]);
  useEffect(() => {
    if (dataExhibitions) setIsLoading(false);
  }, [dataExhibitions]);

  const tabHandler = {
    galleries: () => {
      handleGetGalleries({
        variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      });
      setIsLoading(true);
    },
    exhibitions: () => {
      handleGetExhibitions({
        variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      });
      setIsLoading(true);
    },
    artists: () => {
      handleGetArtists({
        variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      });
      setIsLoading(true);
    },
  };

  // useEffect(()=>{
  //   if(dataGalleries){
  //     set

  //   }

  // },[dataGalleries,dataArtists,dataExhibitions])

  useEffect(() => {
    if (search || currentPage > 0) {
      // handleGetGalleries({
      //   variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      // });
      tabHandler[tab]();
    }
    // handleGetGalleries();
  }, [search, tab]);

  const steps = {
    galleries: data?.galleries.map(({ gallery_name, views, id, image }) => (
      <Link to={`${routes.ROUTE_GALLERY}/${id}`}>
        <GalleryCard
          className="w-100% h-100% mb-12"
          imageClass="image"
          info={false}
          title={gallery_name}
          imageUrl={image ? image : '/images/card/bg_image2.svg'}
          views={views}
        />
      </Link>
    )),
    exhibitions: dataExhibitions?.exhibitions?.map(
      ({ room_name, views, id, image }) => (
        <GalleryCard
          className="w-100% h-100% mb-15"
          imageClass="image"
          info={false}
          title={room_name}
          views={views}
          imageUrl={image ? image : '/images/card/bg_image2.svg'}
        />
      )
    ),
    artists: dataArtists?.artists.map(({ artist_name, id, image }) => (
      <Link to={`${routes.ROUTE_ARTISTS}/${id}`}>
        <GalleryCard
          className="w-100% h-100% mb-12 sm:pt-20"
          imageClass="image"
          info={false}
          title={artist_name}
          imageUrl={image ? image : '/images/card/bg_image2.svg'}
          views={4}
        />
      </Link>
    )),
  };
  const settings = {
    dots: true,

    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 2,
          rows: 2,

          dots: true,
        },
      },
      {
        breakpoint: 459,
        settings: {
          arrows: false,
          slidesToShow: 2,
          rows: 2,

          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        {isLoading ? (
          <div className="w-100% h-100vh flex items-center justify-center ">
            <TailSpin
              color="#C71118"
              height={80}
              width={80}
              ariaLabel="loading"
            />
          </div>
        ) : (
          <GalleryBar setHandler={setTab} tab={tab} />
        )}
        <div>
          <div className="max-screen flex justify-end sm:justify-between pt-31 sm:px-23">
            <div className="mr-25 sm:mr-0">
              <SearchBar
                transform="uppercase"
                placeholder={`search for ${tab == 'Galleries' ? 'Gallery' : tab
                  }`}
                bgColor="bg-gray-lighter"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="sm:hidden">
              <SelectOptions label="sort: Most popular" />
            </div>
            <div className="hidden sm:block">
              <SelectOptions label="sort" width="88" />
            </div>
          </div>
        </div>
        <div className="max-screen pt-30 pb-43 sm:px-23">
          <div className="gridView-4 sm:hidden">{steps[tab]}</div>
          <div className="hidden sm:block">
            {isLoading ? (
              <div className="w-100% h-100vh flex items-center justify-center ">
                <TailSpin
                  color="#C71118"
                  height={80}
                  width={80}
                  ariaLabel="loading"
                />
              </div>
            ) : (
              <div className="gridView-1 packages-slider-2 ">
                <Slider {...settings}>{steps[tab]}</Slider>
              </div>
            )}
          </div>
          <Pagination
            pageDetails={data?.pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            className="mt-25"
          />
        </div>

        <div className="w-full bg-gray-lighter">
          <div
            className={`py-136 sm:py-80  sm:px-23 m-auto w-40% xl:w-50% lg:w-60% md:w-70% sm:w-100%`}
          >
            <div className="text-2xl sm:text-lg text-secondary-dark tracking-wider font-avenir-reg uppercase text-center">
              If you are a photographer looking to exhibit we have the tools and
              support to help you
            </div>
            <div className="text-lg sm:text-base font-nunito-light text-center pt-28 pb-26 leading-32">
              Original galleries and photography, handpicked by our expert
              curators.
            </div>
            <Button className="w-251 h-51 mx-auto block">
              Discover More Today
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
