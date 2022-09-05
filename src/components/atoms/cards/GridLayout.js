import React from 'react';
import { useFetch } from 'hooks';
import '../../../index.css';
import { featureArtwork } from 'api/api-services';
import { parsePath } from 'history';

export default function GridLayout() {
  const { data: getData } = useFetch(featureArtwork);
  const { featured_artworks } = getData || [];
  console.log(featured_artworks);
  return (
    <div>
      {/* This is Desktop design below */}
      <div className="featured-desktop sm:hidden">
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
      {/* This is mobile design below */}
      <div className="featured-mobile hidden sm:block">
        <div
          data-id={featured_artworks ? featured_artworks[0]?.id : ''}
          className="item-squared w-full h-175 featured-arts-custom-bg rounded-8"
          style={{
            backgroundImage: `url(${
              featured_artworks
                ? featured_artworks[0].images[0].image
                : '/images/gallery/image0.png'
            })`,
          }}
        >
          <div
            className="artwork-meta-info h-full flex items-start justify-end pl-11 pb-6 flex-col gap-10"
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

        <div className="featured-row flex flex-row gap-10 justify-between mt-10">
          <div
            className="item-vertical w-1/2 featured-arts-custom-bg"
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
              className="artwork-meta-info  flex pl-11 pb-6 items-start justify-end flex-col gap-10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%)',
                height: '317px',
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
          <div className="flex flex-col w-1/2 justify-between gap-10">
            <div
              data-id={featured_artworks ? featured_artworks[2]?.id : ''}
              className="item-square h-1/2 featured-arts-custom-bg"
              style={{
                backgroundImage: `url(${
                  featured_artworks
                    ? featured_artworks[2].images[0].image
                    : '/images/gallery/image0.png'
                })`,
              }}
            >
              <div
                className="artwork-meta-info h-full flex items-start justify-end pl-11 pb-6 flex-col gap-10"
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
              className="item-square h-1/2 featured-arts-custom-bg"
              style={{
                backgroundImage: `url(${
                  featured_artworks
                    ? featured_artworks[3].images[0].image
                    : '/images/gallery/image0.png'
                })`,
              }}
            >
              <div
                className="artwork-meta-info h-full flex pl-11 pb-6 items-start justify-end flex-col gap-10"
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
      </div>
    </div>
  );
}
