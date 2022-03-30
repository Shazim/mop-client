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
import { getGalleries } from 'api/api-services';

function Gallary() {
  const [tab, setTab] = useState('Galleries');
  const [handleGetGalleries, { data, status }] = useLazyFetch(getGalleries);

  console.log('galleries', data);

  useEffect(() => {
    handleGetGalleries();
  }, []);

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
            />
          </div>
          <SelectOptions label="sort: Most popular" />
        </div>
      </div>
      <div className="max-screen pt-30 pb-43">
        <div className="grid grid-cols-4 gap-36 justify-between">
          {data?.galleries.map(() => (
            <Link to={'/gallery-detail'}>
              <GalleryCard />
            </Link>
          ))}
        </div>
        <div className="text-primary link mt-25 text-base">1</div>
      </div>
      <DiscoverMore background="bg-gray-lighter" />
      <Footer />
    </div>
  );
}

export default Gallary;
