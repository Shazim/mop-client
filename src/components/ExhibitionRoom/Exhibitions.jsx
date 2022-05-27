import VideoCard from 'components/atoms/cards/VideoCard';
import { useFetch } from 'hooks';
import React, { useState } from 'react';
import { getExhibitions } from 'api';
import Button from 'components/atoms/buttons/Button';
import Pagination from 'components/Pagination/Pagination';
import { useSelector } from 'react-redux';

function ExhibitionsComp() {
  const { data: ExhibitionsData, refetch } = useFetch(getExhibitions);
  const [currentPage, setCurrentPage] = useState(1);
  const [draft, setDraft] = useState(false);

  const handleDraft = (status) => {
    setDraft(status);
    refetch({ variables: `draft=${status}` });
  };

  return (
    <div className="pb-106">
      <div className="flex mt-26 mb-18 sm:justify-center">
        <Button
          color={draft ? 'gray' : 'secondary'}
          className="w-93 h-30 mr-15 sm:w-150 sm:h-45"
          onClick={() => handleDraft(false)}
        >
          LIVE
        </Button>
        <Button
          color={draft ? 'secondary' : 'gray'}
          onClick={() => handleDraft(true)}
          className="w-93 h-30 sm:w-150 sm:h-45"
        >
          DRAFTS
        </Button>
      </div>
      <div className="mb-15 grid grid-cols-2 gap-22  sm:grid-cols-1">
        {ExhibitionsData &&
          ExhibitionsData?.exhibitions?.map(({ image }) => (
            <VideoCard imageUrl={image ? image : undefined} />
          ))}
      </div>
      <Pagination
        pageDetails={ExhibitionsData?.pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="mt-25"
      />
    </div>
  );
}

export default ExhibitionsComp;
