import React from 'react';
import { useFetch } from 'hooks';
import '../../../index.css';
import { featureArtwork } from 'api/api-services';
import { parsePath } from 'history';

export default function GridLayout(
  {
    // column,
    // gap,
    // obj = [
    //   {
    //     imageUrl: `${window.location.origin}/images/gallery/image0.png`,
    //     userName: 'Amy Moore',
    //     status: 'available',
    //     userImage: '/images/gallery/userImage.png',
    //     galleryImage: '1,786',
    //     totalImages: '1,643',
    //   },
    //   {
    //     imageUrl: '/images/gallery/image1.png',
    //     userName: 'Amy Moore',
    //     status: 'available',
    //     userImage: '/images/gallery/userImage.png',
    //     galleryImage: '1,786',
    //     totalImages: '1,643',
    //   },
    //   {
    //     imageUrl: '/images/gallery/image2.png',
    //     userName: 'Amy Moore',
    //     status: 'available',
    //     userImage: '/images/gallery/userImage.png',
    //     galleryImage: '1,786',
    //     totalImages: '1,643',
    //   },
    //   {
    //     imageUrl: '/images/gallery/image3.png',
    //     userName: 'Amy Moore',
    //     status: 'available',
    //     userImage: '/images/gallery/userImage.png',
    //     galleryImage: '1,786',
    //     totalImages: '1,643',
    //   },
    // ],
  }
) {
  const { data: getData } = useFetch(featureArtwork);
  const { featured_artworks } = getData || [];
  console.log(featured_artworks);
  return (
    <div>
      <div className="featured-row flex gap-24 justify-between">
        <div
          data-id={featured_artworks ? featured_artworks[0]?.id : ''}
          className="item-squared w-1/3 h-265 featured-arts-custom-bg"
          style={{
            backgroundImage: `url(${
              featured_artworks
                ? featured_artworks[0].images[0].image
                : '/images/gallery/image0.png'
            })`,
          }}
        >
          <div
            className="artwork-meta-info h-full flex items-start justify-end pl-34 pb-13 flex-col gap-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%)',
            }}
          >
            <div className="profile-info flex items-center">
              <div className="avatar w-30 h-32 sm:w-24 sm:h-23 rounded-full">
                <img
                  src="/images/featured-artist-avatar.png"
                  alt="artist-profile-photo"
                />
              </div>
              <div className="artist-name text-white text-base font-avenir-reg leading-22 tracking-tight font-bold ml-10 sm:text-tiny">
                <h3>
                  {featured_artworks
                    ? featured_artworks[0].artist_name
                    : 'No Name'}
                </h3>
              </div>
            </div>
            <div className="other-info text-white capitalize text-xsm sm:text-tiny">
              <div className="gallery-views">
                <b>1,302</b>&nbsp; &nbsp;Gallery Views
              </div>
              <div className="images-available">
                <b>679</b>&nbsp; &nbsp;Images Available
              </div>
            </div>
          </div>
        </div>
        <div
          className="item-rectangular w-2/3 h-265 featured-arts-custom-bg"
          data-id={featured_artworks ? featured_artworks[1]?.id : ''}
          style={{
            backgroundImage: `url(${
              featured_artworks
                ? featured_artworks[1].images[0].image
                : '/images/gallery/image0.png'
            })`,
          }}
        >
          <div
            className="artwork-meta-info h-full flex pl-34 pb-13 items-start justify-end flex-col gap-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%)',
            }}
          >
            <div className="profile-info flex items-center">
              <div className="avatar w-30 h-32 sm:w-24 sm:h-23 rounded-full">
                <img
                  src="/images/featured-artist-avatar.png"
                  alt="artist-profile-photo"
                />
              </div>
              <div className="artist-name text-white text-base font-avenir-reg leading-22 tracking-tight font-bold ml-10 sm:text-tiny">
                <h3>
                  {featured_artworks
                    ? featured_artworks[1].artist_name
                    : 'No Name'}
                </h3>
              </div>
            </div>
            <div className="other-info text-white capitalize text-xsm sm:text-tiny">
              <div className="gallery-views">
                <b>1,302</b>&nbsp; &nbsp;Gallery Views
              </div>
              <div className="images-available">
                <b>679</b>&nbsp; &nbsp;Images Available
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-row flex flex-row-reverse gap-24 justify-between mt-24">
        <div
          data-id={featured_artworks ? featured_artworks[2]?.id : ''}
          className="item-squared w-1/3 h-265 featured-arts-custom-bg"
          style={{
            backgroundImage: `url(${
              featured_artworks
                ? featured_artworks[2].images[0].image
                : '/images/gallery/image0.png'
            })`,
          }}
        >
          <div
            className="artwork-meta-info h-full flex items-start justify-end pl-34 pb-13 flex-col gap-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%)',
            }}
          >
            <div className="profile-info flex items-center">
              <div className="avatar w-30 h-32 sm:w-24 sm:h-23 rounded-full">
                <img
                  src="/images/featured-artist-avatar.png"
                  alt="artist-profile-photo"
                />
              </div>
              <div className="artist-name text-white text-base font-avenir-reg leading-22 tracking-tight font-bold ml-10 sm:text-tiny">
                <h3>
                  {featured_artworks
                    ? featured_artworks[2].artist_name
                    : 'No Name'}
                </h3>
              </div>
            </div>
            <div className="other-info text-white capitalize text-xsm sm:text-tiny">
              <div className="gallery-views">
                <b>1,302</b>&nbsp; &nbsp;Gallery Views
              </div>
              <div className="images-available">
                <b>679</b>&nbsp; &nbsp;Images Available
              </div>
            </div>
          </div>
        </div>
        <div
          data-id={featured_artworks ? featured_artworks[3]?.id : ''}
          className="item-rectangular w-2/3 h-265 featured-arts-custom-bg"
          style={{
            backgroundImage: `url(${
              featured_artworks
                ? featured_artworks[3].images[0].image
                : '/images/gallery/image0.png'
            })`,
          }}
        >
          <div
            className="artwork-meta-info h-full flex pl-34 pb-13 items-start justify-end flex-col gap-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%)',
            }}
          >
            <div className="profile-info flex items-center">
              <div className="avatar w-30 h-32 sm:w-24 sm:h-23 rounded-full">
                <img
                  src="/images/featured-artist-avatar.png"
                  alt="artist-profile-photo"
                />
              </div>
              <div className="artist-name text-white text-base font-avenir-reg leading-22 tracking-tight font-bold ml-10 sm:text-tiny">
                <h3>
                  {featured_artworks
                    ? featured_artworks[3].artist_name
                    : 'No Name'}
                </h3>
              </div>
            </div>
            <div className="other-info text-white capitalize text-xsm sm:text-tiny">
              <div className="gallery-views">
                <b>1,302</b>&nbsp; &nbsp;Gallery Views
              </div>
              <div className="images-available">
                <b>679</b>&nbsp; &nbsp;Images Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
