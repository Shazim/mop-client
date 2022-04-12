import SearchBar from 'components/atoms/searchbar/SearchBar';
import React from 'react';
import FeatureCard from './FeatureCard';

function Artwork() {
  return (
    <div>
      {' '}
      <div>
        <div className="admin-h1 pb-17">Add artwork to exhibition room</div>
        <div className="admin-des pb-20 hr-b">
          Add images that you want in your exhibition room. You can choose the
          order on the next screen.
        </div>
        <div>
          <SearchBar
            transform="uppercase"
            placeholder="search for Artwork"
            bgColor="bg-gray-lighter"
            // value={search}
            className="w-243 h-32 mt-22"

            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="mt-26 admin-label mb-20">Choose Your artwork</div>
        <div className="grid grid-cols-2 gap-12 ">
          {[...Array(10)].map(() => (
            <FeatureCard />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artwork;
