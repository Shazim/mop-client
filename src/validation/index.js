import * as Yup from 'yup';
import { camelCasetoNormal } from 'utils';

export const generateSchema = (param) => {
  const labels = Object.keys(param) || [];
  const schema = {};
  labels.map((label) => {
    if (label.indexOf('email') !== -1)
      schema[label] = Yup.string()
        .email(`${camelCasetoNormal(label)} is must be valid`)
        .required(`${camelCasetoNormal(label)} is required`);
    else if (label.indexOf('phone') !== -1) schema[label] = Yup.string();
    else if (label.indexOf('username') !== -1)
      schema[label] = Yup.string()
        .min(4)
        .max(32)
        .matches(
          /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,32}$/,
          'Username is not valid'
        )
        .required(`${camelCasetoNormal(label)} is required`);
    // else if (label.indexOf('password') >= 0 || label.indexOf('Password') >= 0)
    //   schema[label] = Yup.string()
    //     .min(6)
    //     .matches(
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
    //       'Must Contain 6 Characters, One Uppercase, One Lowercase and One Number.'
    //     )
    //     .required(`${camelCasetoNormal(label)} is required`);
    else if (label.indexOf('confirm') >= 0)
      schema[label] = Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          'Password is not match to confirm Password'
        )
        .required();
    else if (label.indexOf('checkBox') >= 0)
      schema[label] = Yup.boolean().required(
        `${camelCasetoNormal(label)} is required`
      );
    else
      schema[label] = Yup.string().required(
        `${camelCasetoNormal(label)} is required`
      );
  });
  return Yup.object().shape(schema);
};

export const artworkSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  artwork_images_attributes: Yup.array()
    .of(
      Yup.object().shape({
        featured_image: Yup.boolean().required(),
      })
    )
    .min(1, 'please add at least one image')
    .test(
      'artwork_images_attributes',
      'please checked the one checkbox ',
      (artwork_images_attributes) => {
        return artwork_images_attributes.some(
          (artwork_images_attributes) =>
            artwork_images_attributes.featured_image
        );
      }
    ),
});

export const exhibitionSchema = Yup.object().shape({
  room_name: Yup.string().required('Room Name is required'),
  exhibition_style_id: Yup.string().required(
    'Please select at least one style'
  ),
  artwork_ids: Yup.object()
    .shape()
    .test(
      'artwork_images_attributes',
      'please Select at least one Artwork ',
      (artwork_images_attributes) => {
        return Object.keys(artwork_images_attributes).length != 0;
      }
    ),
});

export const priceSheetSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  priceSheetAttributes: Yup.object()
    .shape()
    .test(
      'priceSheetAttributes',
      'please Select at least one size ',
      (priceSheetAttributes) => {
        return Object.keys(priceSheetAttributes).length != 0;
      }
    ),
});

export const gallerySchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  artist_name: Yup.string().required('Note required please'),
  welcome_video: Yup.string().required('Welcome video is required'),
  domain: Yup.string().required('Domain is required'),
});
