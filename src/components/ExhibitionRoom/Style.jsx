// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useFetch } from 'hooks';
import { useFormikContext } from 'formik';
// ====================== IMPORTED COMPONENTS ========================
import ErrorMessage from 'components/app/forms/ErrorMessage';
import StyleCard from './StyleCard';
// ====================== IMPORTED API ========================
import { getExhibitionStyles } from 'api';

const Style = () => {
  const { data: ExhibitionStylesData } = useFetch(getExhibitionStyles);
  const {
    setFieldValue,
    values: { exhibition_style_id },
    errors,
    touched,
  } = useFormikContext() || {};

  return (
    <div>
      <div>
        <div className="admin-h1 pb-15">Choose your style</div>
        <div>
          {ExhibitionStylesData &&
            ExhibitionStylesData?.exhibition_styles.map(
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
        <ErrorMessage
          error={errors['exhibition_style_id']}
          visible={touched['exhibition_style_id']}
        />
      </div>
    </div>
  );
};

export default Style;
