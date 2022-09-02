// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
import { useLazyFetch, useFetch } from 'hooks';
import { debounce } from "lodash";
import { TailSpin } from 'react-loader-spinner';

// ====================== IMPORTED COMPONENTS ========================
import SearchBar from 'components/atoms/searchbar/SearchBar';
import FeatureCard from './FeatureCard';
import ErrorMessage from 'components/app/forms/ErrorMessage';
// ====================== IMPORTED api ========================
import { useFormikContext } from 'formik';
import { getArtWorks } from 'api';

const Artwork = () => {
  const { setFieldValue, errors, touched } = useFormikContext() || {};
  const [search, setSearch] = useState('');
  const { data: dataArtworks, loading, status, refetch } = useFetch(getArtWorks);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    if (perPage > 10 || currentPage > 1) {
      refetch({
        variables: `${perPage ? `per_page=${perPage}` : ''
          }${currentPage ? `page=${currentPage}` : ''}`,
      });
    }
  }, [perPage, currentPage,]);

  return (
    <div className="px-45">
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
          className="w-251 h-32 mt-22"
          value={search}
          onChange={(e) => {
            refetch({
              variables: `?q[name_cont]=${e.target.value}`,
            });
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="mt-26 admin-label mb-20">Choose Your artwork</div>
      {loading && (
        <div className="w-100% flex items-center justify-center ">
          <TailSpin
            color="#C71118"
            height={80}
            width={80}
            ariaLabel="loading"
          />
        </div>
      )
      }
      <div className="grid grid-cols-2 gap-11 ">
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
