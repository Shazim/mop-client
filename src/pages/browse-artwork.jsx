// ====================== IMPORTED LIBRARIES ========================
import { Link } from 'react-router-dom';
import { useFetch } from 'hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { TailSpin } from 'react-loader-spinner';
// ====================== IMPORTED COMPONENT ========================
import GalleryCard from 'components/atoms/cards/GalleryCard';
import SelectOptions from 'components/atoms/form/SelectOptions';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import SideBarWithLogin from 'components/molecules/sidebar/SideBarWithLogin';
import Pagination from 'components/Pagination/Pagination';
import Button from 'components/atoms/buttons/Button';
import withCustomerRoute from 'hoc/withCustomerRoute';
import { routes } from 'routes';

// ====================== IMPORTED API ========================
import {
  getBrowseArtworks,
  getPublicColors,
  getPublicStyles,
} from 'api/api-services';

const BrowseArtwork = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data: dataArtworks, refetch } = useFetch(getBrowseArtworks, {
    variables: `page=${currentPage + 1}`,
  });

  const [isLoading, setIsLoading] = useState(true);

  const search = useSelector((state) => state?.public?.searchSideBar);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (dataArtworks) setIsLoading(false);
  }, [dataArtworks]);

  useEffect(() => {
    if (search != '') {
      refetch({
        variables: `q[name_cont]=${search != '' ? `${search}` : ''}`,
      });
    }
  }, [search]);

  useEffect(() => {
    if (currentPage > 0) {
      refetch({
        variables: `page=${currentPage}`,
      });
    }
  }, [currentPage]);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 2,
          rows: 3,
          slidesToScroll: 2,

          dots: true,
        },
      },
      {
        breakpoint: 459,
        settings: {
          arrows: false,
          slidesToShow: 2,
          rows: 3,
          slidesToScroll: 2,

          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <div className="flex h-100vh">
        <SideBarWithLogin className="sm:hidden" />
        <div className="w-91% sm:w-100% bg-gray-dark">
          <div className="flex justify-end pt-31 px-57 sm:hidden sm:bg-white">
            <div className="mr-25">
              <SelectOptions width="180" label="SHOW 50" />
            </div>
            <div>
              <SelectOptions width="238" label="sort: Most popular" />
            </div>
          </div>
          <div className="hidden sm:flex justify-center mt-30 bg-gray-lighter text-center w-full h-26">
            <div className="mt-13 mr-10 w-8 h-6">
              <img src="images/icons/open-option.svg" alt="" />
            </div>
            <div className=" text-secondary text-tiny font-bold font-nunito-light leading-8 uppercase tracking">
              filter & sort
            </div>
          </div>
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
            <>
              {dataArtworks?.artworks > 0 ? (
                <div className="pt-30 pl-57 pb-43 pr-60">
                  <div className="flex flex-wrap gap-36">
                    <div className="gridView sm:hidden">
                      {dataArtworks?.artworks?.map(
                        ({
                          name,
                          id,
                          artist_name,
                          featured_image,
                          images_included,
                          views,
                        }) => (
                          <Link to={`${routes.ROUTE_SINGLE_ARTWORK}/${id}`}>
                            <GalleryCard
                              imageClass="image"
                              className="mb-12 stockroom__images"
                              incImages={images_included}
                              imageUrl={
                                featured_image ? featured_image : undefined
                              }
                              views={views}
                              title={name}
                            />
                          </Link>
                        )
                      )}
                    </div>

                    <div className="hidden sm:w-full sm:block">
                      <div className="grid grid-cols-1  ">
                        <Slider {...settings}>
                          {dataArtworks?.artworks?.map(
                            ({
                              name,
                              id,
                              artist_name,
                              featured_image,
                              images_included,
                              views,
                            }) => (
                              <Link to={`${routes.ROUTE_SINGLE_ARTWORK}/${id}`}>
                                <GalleryCard
                                  imageClass="image"
                                  className="mb-12 mr-10"
                                  incImages={images_included}
                                  imageUrl={
                                    featured_image ? featured_image : undefined
                                  }
                                  views={views}
                                  title={name}
                                  edit={false}
                                />
                              </Link>
                            )
                          )}

                          {/* <div>
                    {' '}
                    <img src="/images/slider/image.png" alt="" />
                  </div>
                  <div>
                    {' '}
                    <img src="/images/slider/image.png" alt="" />
                  </div>
                  <div>
                    {' '}
                    <img src="/images/slider/image.png" alt="" />
                  </div>
                  <div>
                    {' '}
                    <img src="/images/slider/image.png" alt="" />
                  </div>
                  <div>
                    {' '}
                    <img src="/images/slider/image.png" alt="" />
                  </div> */}
                        </Slider>
                      </div>
                      <div className="bg-gray-lighter pb-60 sm:w-full">
                        <div className="mt-48 font-avenir-reg font-normal text-secondary-dark tracking-wider leading-38 text-base text-center uppercase">
                          If you are a photographer looking to exhibit we have
                          the tools and support to help you reach more clients.
                        </div>
                        <div className="mt-27 font-nunito-light font-light leading-35 text-secondary-dark text-center text-lg">
                          Using our suite of tools and mentorship program we can
                          help you grow in terms of skills and reach. Click
                          below to find out how much we offer and the different
                          ways we can help you.
                        </div>
                        <div className="mt-34 text-center">
                          <Button transform="uppercase" className="w-275 h-48 ">
                            Discover More Today
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Pagination
                    pageDetails={dataArtworks?.pagination}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    className="mt-25 sm:hidden"
                  />
                  {/* <div className="text-primary link mt-25 text-base">1</div> */}
                </div>
              ) : (
                <div className="text-center justify-center pt-112">
                  <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
                    no Artworks for sale
                  </p>

                  <img
                    className="mx-auto w-180 h-180 mt-56 mb-491"
                    src="/images/galleryIcon.svg"
                  />
                </div>
              )}
            </>
          )}
          {/* <DiscoverMore background="bg-gray-lighter" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withCustomerRoute(BrowseArtwork);
