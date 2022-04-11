import React, { useState, useEffect } from 'react';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import Header from 'components/molecules/header/Header';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SelectOptions from 'components/atoms/form/SelectOptions';
import DiscoverMore from 'components/DiscoveMore/DiscoverMore';
import Footer from 'components/molecules/footer/Footer';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import { Link } from 'react-router-dom';
import { useLazyFetch } from 'hooks';
import { getGalleries, getArtists, getExhibitions } from 'api/api-services';
import Pagination from 'components/Pagination/Pagination';

function Gallary() {
  const [tab, setTab] = useState('galleries');
  const [handleGetGalleries, { data, status }] = useLazyFetch(getGalleries);
  const [handleGetArtists, { data: dataArtists }] = useLazyFetch(getArtists);
  const [handleGetExhibitions, { data: dataExhibitions }] =
    useLazyFetch(getExhibitions);

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
    galleries: data?.galleries.map(({ gallery_name, views, id }) => (
      <Link to={`/gallery-detail?id=${id}`}>
        <GalleryCard info={false} title={gallery_name} views={views} />
      </Link>
    )),
    exhibitions: dataExhibitions?.exhibitions.map(
      ({ gallery_name, views, id }) => (
        <Link to={`/gallery-detail?id=${id}`}>
          <GalleryCard info={false} title={gallery_name} views={views} />
        </Link>
      )
    ),
    artists: dataArtists?.artists.map(({ artist_name, id }) => (
      <Link to={`/gallery-detail?id=${id}`}>
        <GalleryCard info={false} title={artist_name} views={4} />
      </Link>
    )),
  };

  return (
    <div>
      <Header />
      <GalleryBar setHandler={setTab} />
      <div>
        <div className="max-screen flex justify-end pt-31">
          <div className="mr-25">
            <SearchBar
              transform="uppercase"
              placeholder={`search for ${tab == 'Galleries' ? 'Gallery' : tab}`}
              bgColor="bg-gray-lighter"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <SelectOptions label="sort: Most popular" />
        </div>
      </div>
      <div className="max-screen pt-30 pb-43">
        <div className="grid grid-cols-4 gap-36 justify-between">
          {steps[tab]}
        </div>
        {/* <div className="text-primary link mt-25 text-base">1</div> */}
        <Pagination
          pageDetails={data?.pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          className="mt-25"
        />
      </div>
      <DiscoverMore background="bg-gray-lighter" />
      <Footer />
    </div>
  );
}

export default Gallary;
