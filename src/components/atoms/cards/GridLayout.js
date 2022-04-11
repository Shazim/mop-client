import React, { useState, useEffect } from 'react';
import '../../../index.css';

export default function GridLayout({
  column,
  gap,
  obj = [
    {
      imageUrl: '/images/gallery/image0.png',
      userName: 'Amy Moore',
      status: 'available',
      userImage: '/images/gallery/userImage.png',
      galleryImage: '1,786',
      totalImages: '1,643',
    },
    {
      imageUrl: '/images/gallery/image1.png',
      userName: 'Amy Moore',
      status: 'available',
      userImage: '/images/gallery/userImage.png',
      galleryImage: '1,786',
      totalImages: '1,643',
    },
    {
      imageUrl: '/images/gallery/image2.png',
      userName: 'Amy Moore',
      status: 'available',
      userImage: '/images/gallery/userImage.png',
      galleryImage: '1,786',
      totalImages: '1,643',
    },
    {
      imageUrl: '/images/gallery/image3.png',
      userName: 'Amy Moore',
      status: 'available',
      userImage: '/images/gallery/userImage.png',
      galleryImage: '1,786',
      totalImages: '1,643',
    },
  ],
}) {
  useEffect(() => {
    // AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div style={{ columns: column, columnGap: 12 }}>
      {obj.map((item, i) => (
        <div className="relative sm:min-h-100 sm:rounded-8 sm:overflow-hidden">
          <img
            src={item.imageUrl}
            key={i}
            className="image"
            style={{ paddingBottom: 12 }}
          />
          <div className="absolute bottom-20 sm:bottom-15 left-21">
            <div className="flex items-center mb-8 sm:mb-5">
              <img
                className="w-30 h-32 sm:w-24 sm:h-23 rounded-50%"
                src={item.userImage}
              />
              <p className="text-white text-base font-avenir-reg leading-22 tracking-tight font-bold ml-10 sm:text-tiny">
                {item.userName}
              </p>
            </div>
            <p className="text-white capitalize text-xsm sm:text-tiny">
              <span className="font-bold">{item.galleryImage}</span> gallary
              views
            </p>
            <p className="text-white capitalize text-xsm sm:text-tiny">
              <span className="font-bold">{item.totalImages}</span> images{' '}
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
