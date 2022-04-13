import VideoCard from 'components/atoms/cards/VideoCard';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import React, { useEffect, useState } from 'react';
import { useLazyFetch } from 'hooks';
import { getGalleryDetails } from 'api/api-services';
import Pagination from 'components/Pagination/Pagination';
import Container from 'Layout/Container';

function GallaryDetail(props) {
  const [handleGetGalleries, { data }] = useLazyFetch(getGalleryDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');

  useEffect(() => {
    if (id) {
      handleGetGalleries({ variables: 1 });
    }
  }, [id]);

  return (
    <Container>
      <div className="flex pb-30 flex-col items-center pt-34 tracking-wider font-avenir-reg font-medium uppercase ">
        <div className="text-primary text-2xl">{data?.gallery_name}</div>
        <div className="text-secondary text-lg">{data?.artist_name}</div>
      </div>
      <div className="max-screen ">
        <div className="mx-80 pb-30 grid grid-cols-2 gap-22">
          {data?.exhibitions?.map(({ room_name, views, image }) => (
            <VideoCard title={room_name} views={views} imageUrl={image} />
          ))}
        </div>
        <Pagination
          pageDetails={data?.pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          className="mt-15 mb-63"
        />
      </div>
    </Container>
  );
}

export default GallaryDetail;
