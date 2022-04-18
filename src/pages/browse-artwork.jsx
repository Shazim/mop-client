import GalleryCard from 'components/atoms/cards/GalleryCard';
import SelectOptions from 'components/atoms/form/SelectOptions';
import { getBrowseArtworks } from 'api/api-services';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import SideBarWithLogin from 'components/molecules/sidebar/SideBarWithLogin';
import { Link } from 'react-router-dom';
import { useLazyFetch } from 'hooks';
import { useEffect } from 'react';
import Pagination from 'components/Pagination/Pagination';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function BrowseArtwork() {
  const [currentPage, setCurrentPage] = useState(1);
  const [handleGetArtworks, { data: dataArtworks }] =
    useLazyFetch(getBrowseArtworks);

  const search = useSelector((state) => state?.public?.searchSideBar);

  useEffect(() => {
    handleGetArtworks({
      variables: `?q[name_cont]=${search != '' ? `${search}` : ''}`,
    });
  }, [search]);

  return (
    <>
      <Header />

      <div className="flex">
        <SideBarWithLogin className="sm:hidden" />
        <div className="w-91% sm:w-100% bg-gray-dark">
          <div className="flex justify-end pt-31 px-57">
            <div className="mr-25">
              <SelectOptions width="180" label="SHOW 50" />
            </div>
            <SelectOptions label="sort: Most popular" />
          </div>
          <div className="pt-30 pl-57 pb-43 pr-60">
            <div className="flex flex-wrap gap-36">
              <div className="gridView">
                {dataArtworks?.artworks?.map(
                  ({
                    name,
                    id,
                    artist_name,
                    featured_image,
                    images_included,
                    views,
                  }) => (
                    <Link to={`/single-photo?id=${id}`}>
                      <GalleryCard
                        imageClass="image"
                        className="mb-12"
                        incImages={images_included}
                        imageUrl={featured_image}
                        views={views}
                        title={name}
                      />
                    </Link>
                  )
                )}
              </div>
            </div>
            <Pagination
              pageDetails={dataArtworks?.pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              className="mt-25"
            />
            {/* <div className="text-primary link mt-25 text-base">1</div> */}
          </div>

          {/* <DiscoverMore background="bg-gray-lighter" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BrowseArtwork;
