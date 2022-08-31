// ====================== IMPORTED COMPONENTS ========================
import React from 'react';
// ====================== IMPORTED COMPONENTS ========================
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useFormikContext } from 'formik';

const FeatureCard = ({ name, image, id }) => {
  const {
    setFieldValue,
    values: { artwork_ids },
    errors,
  } = useFormikContext() || {};

  const handleFeature = (id) => {
    let copyArtworkIds = { ...artwork_ids };
    if (copyArtworkIds[id]) {
      delete copyArtworkIds[id];
    } else {
      copyArtworkIds[id] = id;
    }
    setFieldValue('artwork_ids', copyArtworkIds);
  };

  return (
    <div className="max-w-292 relative ">
      <div className="bg-gray-darker relative rounded-sm  h-183">
        <img
          src={image}
          alt=""
          className="absolute w-100% h-100% rounded-sm object-cover"
        />
        <div className="flex top-11 left-13 absolute">
          <CheckBox
            onChange={() => handleFeature(id)}
            checked={artwork_ids[id] == id}
          />
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <div className="text-15 font-nunito-light font-normal tracking-tightest text-secondary">
          {name}
        </div>
        <div className="flex hidden">
          <img src="/images/edit.svg" className="mr-14" />
          <img src="/images/delete.svg" />
        </div>
      </div>
      <div className="flex justify-between hidden">
        <div className="text-15 font-normal font-nunito-light tracking-tightest text-secondary">
          Edit Description
        </div>
        <img src="/images/option.svg" className="mr-15" />
      </div>
    </div>
  );
};

export default FeatureCard;
