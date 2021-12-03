import * as Yup from 'yup';
import { camelCasetoNormal } from 'utils';

export const genrateSchema = (param) => {
  const labels = Object.keys(param);
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
    else if (label.indexOf('password') >= 0 || label.indexOf('Password') >= 0)
      schema[label] = Yup.string()
        .min(8)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase and One Number.'
        )
        .required(`${camelCasetoNormal(label)} is required`);
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
