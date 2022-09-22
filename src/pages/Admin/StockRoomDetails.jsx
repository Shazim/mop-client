import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks';
import { getArtWorks } from 'api';
import { getStock } from 'api/api-services';
import withArtistRoute from 'hoc/withArtistRoute';
import { AdminLayout } from 'Layout';
import Sliders from 'components/atoms/slider/Slider';

const StockRoomDetails = () => {
  const { id } = useParams();

  const { data: dataArtwork = [] } = useFetch(getStock, {
    variables: id,
  });

  const {
    images: sliderImages,
    artist_name,
    name,
    notes,
    more_by_this_artist,
  } = dataArtwork || [];
  return (
    <>
      <AdminLayout title="stock detail">
        <div className="max-screen pt-50  sm:w-100% sm:px-23 sm:h-100% sm:bg-gray-dark">
          <Sliders column={1} images={sliderImages || []} />
        </div>

        <div className=" sm:w-100% sm:px-23 sm:pb-62 pt-25">
          <p className="font-avenir-reg text-2xl text-dark tracking-wider leading-60 uppercase">
            {name}
          </p>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-primary rounded-full mt-5 mr-8"></div>
            <div className="border-b-2 border-black w-100% pt-6"></div>
          </div>
          <p className="font-avenir-reg text-2xl text-primary tracking-wider leading-60 uppercase">
            {artist_name}
          </p>

          <p className="mt-33 font-avenir-reg text-secondary leading-32 text-xl">
            {notes}
          </p>
        </div>
        <div className="max-screen w-100% mt-60 sm:mt-24 pt-90 sm:pt-0 sm:px-23">
          <p className="font-avenir-reg text-2xl sm:text-xl text-secondary-dark tracking-wider leading-60 sm:leading-38 uppercase mb-19">
            More by this artist
          </p>
          <div className="sm:hidden flex grid grid-cols-4 gap-33 w-100% h-100% mb-86">
            {more_by_this_artist?.slice(0, 4).map(({ images, orientation }) => (
              <>
                {images?.map(({ image, featured_image }) => {
                  return featured_image ? (
                    <img className="w-100% h-100%" src={image} />
                  ) : (
                    false
                  );
                })}
              </>
            ))}
          </div>
          <div className="hidden sm:block">
            <Sliders column={1.2} dots={true} images={sliderImages || []} />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default withArtistRoute(StockRoomDetails);
