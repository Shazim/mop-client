import VideoCard from 'components/atoms/cards/VideoCard';
import { useFetch } from 'hooks';
import React from 'react';
import { getExhibitions } from 'api';

function ExhibitionsComp() {
  const { data: ExhibitionsData } = useFetch(getExhibitions);

  return (
    <div>
      <div className="flex mt-26">
        <button>Live</button>
        <button>Draft</button>
      </div>
      <div className="grid grid-cols-2 gap-22">
        {ExhibitionsData &&
          ExhibitionsData?.exhibitions?.map(({ image }) => (
            <VideoCard imageUrl={image} />
          ))}
      </div>
    </div>
  );
}

export default ExhibitionsComp;
