import GalleryCard from 'components/atoms/cards/GalleryCard';
import { AdminLayout } from 'Layout';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleExhibition } from 'api/api-services';
import { useFetch } from 'hooks';
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import withArtistRoute from 'hoc/withArtistRoute';
import Button from 'components/atoms/buttons/Button';

const SingleExhibition = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: dataExhibition = [] } = useFetch(getSingleExhibition, {
    variables: id,
  });
  const { artworks, image, room_name, key } = dataExhibition || [];

  const handleCopy = (key) => {
    if (key) {
      navigator.clipboard.writeText(key);
      toast.info('Copied To Clipboard');
    }
  };
  return (
    <>
      <AdminLayout
        title="Exhibition Details"
        button={true}
        buttonText=" EDIT"
        handler={() => history.push(`${routes.ROUTE_EXHIBITION_ROOM}/${id}`)}
      >
        <div className="  max-screen mb-50">
          <img
            src={image || '/images/card/kelly-sikkema-tk9RQCq5eQo-unsplash.jpg'}
            alt=""
            className="exhition-pic  sm:h-290 object-cover"
          />
        </div>
        <div className="  w-100% pt-50   sm:px-0">
          <div className="flex sm:flex-col-reverse">
            <p className="font-avenir-reg text-2xl text-dark tracking-wider leading-60 uppercase flex-grow">
              {room_name}
            </p>
            <div className="flex sm:mb-20 ">
              <input
                className="bg-gray-lighter h-33 w-100% outline-none text-center"
                placeholder="exhibit.vip/gal/123456"
                value={key}
                readOnly={true}
              />
              <button
                onClick={() => handleCopy(key)}
                className="w-116 h-33 bg-primary  admin-label shadow uppercase"
              >
                <span className="text-white">Copy</span>
              </button>
            </div>
            <Button
              type="outline"
              className="w-112 h-33 ml-35 mr-20  sm:hidden"
              onClick={() =>
                history.push(`${routes.ROUTE_SLICK_SLIDER}/${key}`)
              }
            >
              VIEW
            </Button>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 bg-primary rounded-full mt-5 mr-8"></div>
            <div className="border-b-2 border-black w-100% pt-6"></div>
          </div>
          <p className="font-avenir-reg text-2xl text-primary tracking-wider leading-60 uppercase ">
            Artworks
          </p>
          {artworks?.length > 0 && (
            <div className="gridView  sm:grid grid-cols-1 mt-40 mb-80">
              {artworks?.map(({ id, name, images }) => (
                <>
                  {images?.map(({ image, featured_image }) => (
                    <>
                      {featured_image && (
                        <Link to={`${routes.ROUTE_STOCKROOM}/${id}`}>
                          <div className="mb-25">
                            <GalleryCard
                              imageUrl={image}
                              title={name}
                              className="stockroom__images"
                            />
                          </div>
                        </Link>
                      )}
                    </>
                  ))}
                </>
              ))}
            </div>
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default withArtistRoute(SingleExhibition);
