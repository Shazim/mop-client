// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
import { useLazyFetch, useFetch } from 'hooks';
// ====================== IMPORTED COMPONENTS ========================
import SearchBar from 'components/atoms/searchbar/SearchBar';
import FeatureCard from './FeatureCard';
import ErrorMessage from 'components/app/forms/ErrorMessage';
// ====================== IMPORTED api ========================
import { useFormikContext } from 'formik';
import { getArtWorks } from 'api';

const Artwork = () => {
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
          className="w-243 h-32 mt-22"
        />
      </div>
      <div className="mt-26 admin-label mb-20">Choose Your artwork</div>
      <div className="grid grid-cols-2 gap-12 ">
        {dataArtworks &&
          dataArtworks?.artworks.map(({ name, images, id }) => (
            <>
              {images?.map(({ image, featured_image }) => (
                <>
                  {featured_image && (
                    <FeatureCard name={name} image={image} id={id} />
                  )}
                </>
              ))}
            </>
          ))}
      </div>
      <ErrorMessage
        error={errors['artwork_ids']}
        visible={touched['artwork_ids']}
      />
    </div>
  );
};

export default Artwork;
