import VideoCard from 'components/atoms/cards/VideoCard';
import GalleryBar from 'components/GalleryBar/GalleryBar';
import Header from 'components/molecules/header/Header';
import React from 'react';

function GallaryDetail() {
  return (
    <>
      <Header />
      <GalleryBar />
      <div className="flex pb-30 flex-col items-center pt-34 tracking-wider font-avenir-reg font-medium uppercase ">
        <div className="text-primary text-2xl">Gallery Name</div>
        <div className="text-secondary text-lg">Artist Name</div>
      </div>
      <div className="max-screen ">
        <div className="mx-80 grid grid-cols-2 gap-22">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
      <div>pagination</div>
    </>
  );
}

export default GallaryDetail;
