import SearchBar from 'components/atoms/searchbar/SearchBar';
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import { getArtWorks } from 'api';
import { useLazyFetch, useFetch } from 'hooks';
import ErrorMessage from 'components/app/forms/ErrorMessage';
import { useFormikContext } from 'formik';

function Artwork() {
  const [search, setSearch] = useState('');
  const { data: dataArtworks, status, refetch } = useFetch(getArtWorks);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    if (perPage > 10 || search || currentPage > 1) {
      refetch({
        variables: `${search != '' ? `q[name_cont]=${search}&` : ''}${
          perPage ? `per_page=${perPage}` : ''
        }${currentPage ? `page=${currentPage}` : ''}`,
      });
    }
  }, [perPage, currentPage, search]);

  const { setFieldValue, errors, touched } = useFormikContext() || {};

  return (
    <div>
      <div className="admin-h1 pb-17">Add artwork to exhibition room</div>
      <div className="admin-des pb-20 hr-b">
        Add images that you want in your exhibition room. You can choose the
        order on the next screen.
      </div>
      <div>
        <SearchBar
          transform="uppercase"
          placeholder="search for Artwork"
          bgColor="bg-gray-lighter"
          className="w-243 h-32 mt-22 sm:ml-auto sm:mr-auto"
        />
      </div>
      <div className="mt-26 admin-label mb-20 ">Choose Your artwork</div>
      <div className="grid grid-cols-2 gap-12 md:grid-col-1  sm:grid-cols-1 ">
        {dataArtworks &&
          dataArtworks?.artworks.map(({ name, images, id }) => (
            <>
              {images.map(({ image, featured_image }) => (
                <>
                  {featured_image ? (
                    <FeatureCard name={name} image={image} id={id} />
                  ) : null}
                </>
              ))}
            </>
          ))}
        <div className="hidden sm:block font-nunito-reg font-semibold text-base leading-20 tracking-wider text-secondary-dark uppercase">
          or add new artwork *
        </div>
        <div className="hidden sm:block relative w-292 h-179 mt-17">
          <img src="images/rectangle.svg" alt="" />
          <div className="absolute w-13 h-13 top-45% left-21% flex gap-13 ">
            <img src="images/Plus.svg" alt="" />
            <div className="w-180 h-15 font-bold text-secondary text-base leading-15 uppercase tracking font-nunito-light">
              addartwork
            </div>
          </div>
        </div>
        <div className="hidden sm:block mt-27 font-nunito-light font-light text-base text-secondary leading-22">
          * To make new artwork searchable and sellable, please add here through
          the <span className="card-link-2">dull add new item link.</span> This
          form will save as a draft.
        </div>
      </div>
      <ErrorMessage
        error={errors['artwork_ids']}
        visible={touched['artwork_ids']}
      />
    </div>
  );
}

export default Artwork;
