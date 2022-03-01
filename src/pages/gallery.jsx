import React, { useState } from 'react';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import Header from 'components/molecules/header/Header';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SelectOptions from 'components/atoms/form/SelectOptions';
import DiscoverMore from 'components/DiscoveMore/DiscoverMore';
import Footer from 'components/molecules/footer/Footer';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import { Link } from 'react-router-dom';


function Gallary() {
  const counter = [1,2,2,2,2,2,2,2,3,3,3,3]
  const [tab, setTab] = useState('Galleries')
  return (
    <div>
      <Header />
      <GalleryBar setHandler={setTab} />
      <div>
        <div className="max-screen flex justify-end pt-31">
          <div className="mr-25">
            <SearchBar
              transform='uppercase'
              placeholder={`search for ${tab == "Galleries" ? "Gallery" : tab}`}
              bgColor="bg-gray-lighter"
            />
          </div>
          <SelectOptions label="sort: Most popular" />
        </div>
      </div>
      <div className='max-screen pt-30 pb-43'> 
      <div className='grid grid-cols-4 gap-36 justify-between'>{
        counter.map(() => <Link to={"/gallery-detail"}><GalleryCard/></Link> )
      }    
      </div>    
      <div className='text-primary link mt-25 text-base'>1</div>
      </div>
      <DiscoverMore background="bg-gray-lighter" />
      <Footer />
    </div>
  );
}

export default Gallary;
