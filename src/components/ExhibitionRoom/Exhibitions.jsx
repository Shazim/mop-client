// ====================== IMPORTED LIBRARIES ========================
import { useFetch, useLazyFetch } from 'hooks';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

// ====================== IMPORTED COMPONENTS ========================
import VideoCard from 'components/atoms/cards/VideoCard';
import Button from 'components/atoms/buttons/Button';
import Pagination from 'components/Pagination/Pagination';
import { routes } from 'routes';

// ====================== IMPORTED api ========================
import { getExhibitions } from 'api';
import { getValueInLink } from 'utils/helper';

const ExhibitionsComp = () => {
  const [handleExhibitions, { data: exhibitionsData }] =
    useLazyFetch(getExhibitions);

  const { pathname } = useLocation();
  const history = useHistory();
  const id = getValueInLink(pathname, 3);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (exhibitionsData) setIsLoading(false);
  }, [exhibitionsData]);

  useEffect(() => {
    if (id) {
      const status = id === 'drafts' ? true : false;
      handleExhibitions({ variables: `draft=${status}` });
    }
  }, [id]);

  return (
    <div className="pb-106">
      <div className="flex mt-26 mb-18 sm:justify-center">
        <Link to={`${routes.ROUTE_EXHIBITION_ROOM}/live`}>
          <Button
            color={id === 'drafts' ? 'gray' : 'secondary'}
            className="w-93 h-30 mr-15 sm:w-150 sm:h-45"
          >
            LIVE
          </Button>
        </Link>
        <Link to={`${routes.ROUTE_EXHIBITION_ROOM}/drafts`}>
          <Button
            color={id === 'drafts' ? 'secondary' : 'gray'}
            className="w-93 h-30 sm:w-150 sm:h-45"
          >
            DRAFTS
          </Button>
        </Link>
      </div>
      {id === 'drafts' && exhibitionsData?.exhibitions.length === 0 ? (
        <div className="text-center justify-center pt-112">
          <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
            You have no Drafts Found
          </p>

          <img
            className="mx-auto w-180 h-180 mt-56 mb-491"
            src="/images/galleryIcon.svg"
          />
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="w-100% h-100vh flex items-center justify-center ">
              <TailSpin
                color="#C71118"
                height={80}
                width={80}
                ariaLabel="loading"
              />
            </div>
          ) : (
            <>
              {exhibitionsData?.exhibitions.length > 0 ? (
                <>
                  <div className="  grid grid-cols-2 gap-11   sm:grid-cols-1">
                    {exhibitionsData?.exhibitions?.map(
                      ({
                        exhibition_style,
                        image,
                        id: exhibitionId,
                        room_name,
                        views,
                      }) => (
                        <>
                          <Link
                            to={
                              id === 'drafts'
                                ? `${routes.ROUTE_EXHIBITION_ROOM}/${exhibitionId}`
                                : `${routes.ROUTE_EXHIBITION_ROOM}/live/${exhibitionId}`
                            }
                          >
                            <VideoCard
                              edit={id === 'drafts'}
                              handleEdit={() =>
                                history.push(
                                  `${routes.ROUTE_EXHIBITION_ROOM}/${exhibitionId}`
                                )
                              }
                              imageUrl={image ? image : undefined}
                              title={room_name}
                              views={views}
                              play={image === undefined ? true : false}
                            />
                          </Link>
                        </>
                      )
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center justify-center pt-112">
                  <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
                    You have no Exhibition
                  </p>

                  <img
                    className="mx-auto w-180 h-180 mt-56 mb-491"
                    src="/images/galleryIcon.svg"
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
      <Pagination
        pageDetails={exhibitionsData?.pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="mt-25"
      />
    </div>
  );
};

export default ExhibitionsComp;
