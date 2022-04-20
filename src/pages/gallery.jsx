import React, { useState, useEffect } from 'react';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SelectOptions from 'components/atoms/form/SelectOptions';
import DiscoverMore from 'components/DiscoveMore/DiscoverMore';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import { Link } from 'react-router-dom';
import { useLazyFetch } from 'hooks';
import { getGalleries, getArtists } from 'api/api-services';

import Pagination from 'components/Pagination/Pagination';
import Container from 'Layout/Container';
import { getPublicExhibitions } from 'api';

function Gallery() {
  const [tab, setTab] = useState('galleries');
  const [handleGetGalleries, { data, status }] = useLazyFetch(getGalleries);
  const [handleGetArtists, { data: dataArtists }] = useLazyFetch(getArtists);
  const [handleGetExhibitions, { data: dataExhibitions }] =
    useLazyFetch(getPublicExhibitions);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const tabHandler = {
    galleries: () =>
      handleGetGalleries({
        variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      }),
    exhibitions: () =>
      handleGetExhibitions({
        variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      }),
    artists: () =>
      handleGetArtists({
        variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
      }),
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
      <Link to={`/gallery-detail?id=${id}`}>
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
    exhibitions: dataExhibitions?.exhibitions.map(
      ({ room_name, views, id, image }) => (
        // <Link to={`/gallery-detail?id=${id}`}>
        <GalleryCard
          className="w-100% h-100%"
          imageClass="image"
          info={false}
          title={room_name}
          views={views}
          imageUrl={image ? image : '/images/card/bg_image2.svg'}
        />
        // </Link>
      )
    ),
    artists: dataArtists?.artists.map(({ artist_name, id, image }) => (
      // <Link to={`/gallery-detail?id=${id}`}>
      <GalleryCard
        className="w-100% h-100% mb-12"
        imageClass="image"
        info={false}
        title={artist_name}
        imageUrl={image ? image : '/images/card/bg_image2.svg'}
        views={4}
      />
      // </Link>
    )),
  };

  return (
    <div>
      <Container>
        <GalleryBar setHandler={setTab} />
        <div>
          <div className="max-screen flex justify-end sm:justify-between pt-31 sm:px-23">
            <div className="mr-25 sm:mr-0">
              <SearchBar
                transform="uppercase"
                placeholder={`search for ${
                  tab == 'Galleries' ? 'Gallery' : tab
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
          <div className="gridView">{steps[tab]}</div>
          <Pagination
            pageDetails={data?.pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            className="mt-25"
          />
        </div>
        <DiscoverMore background="bg-gray-lighter" />
      </Container>
    </div>
  );
}

export default Gallery;
