// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFetch } from 'hooks';

// ====================== IMPORTED COMPONENTS ========================
import SelectOptions from 'components/atoms/form/SelectOptions';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import Pagination from 'components/Pagination/Pagination';
// ====================== IMPORTED api ========================
import { getArtWorks } from 'api/api-services';

const StockItem = ({ addItem }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [artworkData, setArtworkData] = useState([]);

  const [perPage, setPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const array = [
    { value: 20, label: 'show 20' },
    { value: 30, label: 'show 30' },
    { value: 40, label: 'show 40' },
    { value: 50, label: 'show 50' },
  ];
  const { data, status, refetch } = useFetch(getArtWorks, {
    variables: `?page=${currentPage}&per_page=${perPage}`,
  });
  const selectedItems = (value) => {
    setPerPage(value);
  };
  useEffect(() => {
    refetch({ variables: `?page=${currentPage}&per_page=${perPage}` });
  }, [perPage]);
  useEffect(() => {
    if (data && data?.artworks) {
      setArtworkData((artData) => [...data?.artworks]);
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage > 1) {
      refetch({
        variables: `?${
          currentPage ? `page=${currentPage}` : ''
        }&per_page=${perPage}`,
      });
    }
  }, [currentPage]);

  return (
    <>
      <div className="flex xl:flex-col lg:flex-col md:flex-col justify-between">
        <SearchBar
          placeholder="Search For An Artist"
          bgColor="bg-transparent"
          className="sm:w-90% sm:h-26 w-200"
          onChange={(e) => {
            refetch({
              variables: `?q[name_cont]=${e.target.value}`,
            });
            setSearch(e.target.value);
          }}
          value={search}
        />
        <div className="hidden sm:block w-10%">
          <img
            src="/images/icons/filter.svg"
            alt=""
            className="ml-auto mr-auto mt-5"
          />
        </div>
        <div className="w-65% sm:hidden xl:w-100% lg:w-100% md:w-100% flex xl:mt-30 lg:mt-30 md:mt-30 justify-between">
          <SelectOptions
            className="w-70% mr-30 xl:w-30% lg:w-30% md:w-30%"
            label="up for sale"
          />

          <SelectOptions
            className="w-77% mr-30 sm:hidden xl:w-35% lg:w-35% md:w-35%"
            label="sort low - high"
          />
          <SelectOptions
            className="w-80% sm:hidden xl:w-30% lg:w-30% md:w-30%"
            label="show 10"
            option={array}
            onChange={selectedItems}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="w-100% h-100vh flex items-center justify-center ">
          <TailSpin
            color="#C71118"
            height={80}
            width={80}
            artworks
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
          {artworkData ? (
            <>
              <div className="flex mt-21  mb-22">
                <img
                  src="/images/icons/info-icon.svg"
                  alt=""
                  className="mr-7"
                />
                <div className="text-primary font-bold tracking uppercase mt-3">
                  Click ‘add info’ to add tags to your images to help customers
                  find them.
                </div>
              </div>
              <div className="gridView  sm:grid grid-cols-1">
                {artworkData?.map(({ name, images }) => (
                  <>
                    {images?.map(({ image, featured_image }) => (
                      <>
                        {featured_image && (
                          <div className="mb-25">
                            <GalleryCard
                              imageUrl={image}
                              title={name}
                              className="stockroom__images"
                            />
                          </div>
                        )}
                      </>
                    ))}
                  </>
                ))}
              </div>

              <div className="mb-44">
                <Pagination
                  pageDetails={data?.pageDetails}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <div className="text-center justify-center pt-112">
              <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
                You have no images for sale
              </p>
              <p className="font-avenir-reg text-secondary text-xl uppercase leading-55 tracking-wider">
                Drag your images here to start uploading.{' '}
              </p>
              <p className="font-reg text-black text-base leading-snug">
                When uploaded, you can edit your image details by clicking the
                pencil icon. Adding this will
                <br /> make your images more visible for search engines.
              </p>
              <img
                className="mx-auto w-180 h-180 mt-56 mb-491"
                src="/images/galleryIcon.svg"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
export default StockItem;
