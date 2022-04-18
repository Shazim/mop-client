import { getExhibitionStyles } from 'api';
import { useFetch } from 'hooks';
import React from 'react';
import StyleCard from './StyleCard';
import { useFormikContext } from 'formik';

function Style() {
  const { data: ExhibitionStylesData } = useFetch(getExhibitionStyles);
  const {
    setFieldValue,
    values: { exhibition_style_id },
  } = useFormikContext() || {};

  return (
    <div>
      <div>
        <div className="admin-h1 pb-15">Choose your style</div>
        <div>
          {ExhibitionStylesData &&
            ExhibitionStylesData.exhibition_styles.map(
              ({ description, image, id, name }) => (
                <div className="mb-28">
                  <StyleCard
                    title={name}
                    description={description}
                    image={image}
                    active={exhibition_style_id == id}
                    onClick={() => setFieldValue('exhibition_style_id', id)}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default Style;
