import React from 'react';
import { useFetch } from 'hooks';
import '../../../index.css';
import { featureArtwork } from 'api/api-services';
import { parsePath } from 'history';

export default function GridLayout({
  column,
  gap,
  obj = [
    {
      imageUrl: `${window.location.origin}/images/gallery/image0.png`,
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
  const { data: getData } = useFetch(featureArtwork);
  const { featured_artworks } = getData || [];
  console.log(featured_artworks);
  return (
    <div style={{ columns: column, columnGap: 12 }}>
      {featured_artworks &&
        featured_artworks?.map((item) => (
          <div className="relative sm:rounded-8" key={item?.id}>
            <img
              src={item?.images[0]?.image}
              className="image sm:rounded-8 mb-12"
            />
            <div className="absolute bottom-20 sm:bottom-15 left-21">
              <div className="flex items-center mb-8 sm:mb-5">
                <img
                  className="w-30 h-32 sm:w-24 sm:h-23 rounded-50%"
                  src={item?.images[0]?.image}
                />
                <p className="text-white text-base font-avenir-reg leading-22 tracking-tight font-bold ml-10 sm:text-tiny">
                  {item?.name}
                </p>
              </div>
              <p className="text-white capitalize text-xsm sm:text-tiny">
                <span className="font-bold">{item?.views}</span> gallary views
              </p>
              <p className="text-white capitalize text-xsm sm:text-tiny">
                <span className="font-bold">{item?.images_included}</span>{' '}
                images available
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
