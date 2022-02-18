import React from 'react';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import Header from 'components/molecules/header/Header';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SelectOptions from 'components/atoms/form/SelectOptions';
import DiscoverMore from 'components/DiscoveMore/DiscoverMore';
import Footer from 'components/molecules/footer/Footer';

function Gallary() {
  return (
    <div>
      <Header />
      <GalleryBar />
      <div>
        <div className="max-screen flex justify-end">
          <div className="mr-25">
            <SearchBar
              placeholder="search for gallery"
              bgColor="bg-gray-lighter"
            />
          </div>
          <SelectOptions label="sort: Most popular" />
        </div>
      </div>
      <div></div>
      <div>pagination</div>
      <DiscoverMore background="bg-gray-lighter" />
      <Footer />
    </div>
  );
}

export default Gallary;
