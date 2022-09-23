import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks';
import { getStock } from 'api/api-services';
import withArtistRoute from 'hoc/withArtistRoute';
import { AdminLayout } from 'Layout';
import Sliders from 'components/atoms/slider/Slider';

const StockRoomDetails = () => {
  const { id } = useParams();

  const { data: dataArtwork = [] } = useFetch(getStock, {
    variables: id,
  });

  const { images: sliderImages, artist_name, name, notes } = dataArtwork || [];
  return (
    <>
      <AdminLayout title="stock detail">
        <div className="max-screen mb-25 ">
          <Sliders column={1} images={sliderImages || []} />
        </div>

        <div className=" w-50% md:w-45% sm:w-100% sm:px-23 sm:pb-62 pt-25 pb-90 ">
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
      </AdminLayout>
    </>
  );
};

export default withArtistRoute(StockRoomDetails);
