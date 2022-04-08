import React, { useState, useEffect } from 'react';
import SelectOptions from 'components/atoms/form/SelectOptions';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SubHeader from 'components/molecules/header/SubHeader';
import { useLazyFetch } from 'hooks';
import { getArtWorks } from 'api/api-services';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import Pagination from 'components/Pagination/Pagination';

export default function StockItem({ addItem }) {
  const [search, setSearch] = useState('');
  const [handleGetArtWorks, { data, status }] = useLazyFetch(getArtWorks);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // useEffect(() => {
  //   handleGetArtWorks();
  // }, []);

  useEffect(() => {
    if (perPage > 10 || search || currentPage > 1) {
      handleGetArtWorks({
        variables: `${search != '' ? `q[name_cont]=${search}&` : ''}${
          perPage ? `per_page=${perPage}` : ''
        }${currentPage ? `page=${currentPage}` : ''}`,
      });
    }
  }, [perPage, currentPage, search]);

  return (
    <div className="w-80%">
      <SubHeader
        handler={addItem}
        title="stockroom"
        subtitle="up for sale"
        buttonText="ADD NEW ITEM"
        button={true}
      />
      <div className="px-43 pt-32">
        <div className="flex justify-between">
          <SearchBar
            placeholder="Search For An Artist"
            bgColor="bg-gray-dark"
            onChange={(e) => {
              handleGetArtWorks({
                variables: `?q[name_cont]=${e.target.value}`,
              });
              setSearch(e.target.value);
            }}
            value={search}
          />
          <div className="w-60% flex justify-between">
            <SelectOptions width="30%" label="up for sale" />
            <SelectOptions width="35%" label="sort low - high" />
            <SelectOptions
              width="30%"
              label="show 10"
              option={[
                { value: 20, label: 'show 20' },
                { value: 30, label: 'show 30' },
                { value: 40, label: 'show 40' },
                { value: 50, label: 'show 50' },
              ]}
              onChange={(item) => {
                setPerPage(item);
              }}
            />
          </div>
        </div>

        {data ? (
          <>
            <div className="flex mt-21">
              <img src="/images/icons/info-icon.svg" alt="" className="mr-7" />
              <div className="text-primary font-bold tracking uppercase mt-3">
                Click ‘add info’ to add tags to your images to help customers
                find them.
              </div>
            </div>
            <div className="flex flex-wrap justify-between mt-22">
              {data.artworks.map(() => (
                <div className="mb-25">
                  <GalleryCard />
                </div>
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
      </div>
    </div>
  );
}
