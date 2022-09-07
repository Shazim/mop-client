import { Link } from 'react-router-dom';

export const camelCasetoNormal = (word) => {
  return word
    .split(/(?=[A-Z])/)
    .map((s) => s[0].toUpperCase() + s.slice(1) + ' ')
    .join('');
};

export const colorLoader = (value) => {
  switch (true) {
    case value > 0 && value <= 20:
      return 'primary-red';
    case value > 20 && value <= 40:
      return 'primary-orange';
    case value > 40 && value <= 60:
      return 'primary-yellow';
    case value > 60 && value <= 80:
      return 'primary-green-light';
    case value > 80 && value <= 100:
      return 'primary-green';
  }
};

export const colorText = (value) => {
  switch (true) {
    case value > 0 && value <= 12:
      return 'primary-red';
    case value > 12 && value <= 22:
      return 'primary-orange';
    case value > 22 && value <= 32:
      return 'primary-yellow';
    case value > 32 && value <= 42:
      return 'primary-green-light';
    case value > 42 && value <= 52:
      return 'primary-green';
  }
};

export const partCount = (value) => {
  switch (true) {
    case value >= 7:
      return 3;
    case value >= 5:
      return 2;
    case value >= 2:
      return 1;
    default:
      return 0;
  }
};

export const dnaCircle = (value) => {
  switch (true) {
    case value >= 35:
      return 20;
    case value >= 28:
      return 16;
    case value >= 21:
      return 12;
    case value >= 14:
      return 8;
    case value >= 7:
      return 4;
    default:
      return 0;
  }
};

export const ConditionalLink = ({ children, to, condition }) =>
  !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

export const formDataHandler = (mainKey, key, value, formData1) => {
  if (Array.isArray(value)) {
    value.map((item, index) => {
      if (typeof item == 'object') {
        Object.entries(item).map(([key1, value1]) => {
          formData1.append(`${mainKey}[${key}][${index}][${key1}]`, value1);
        });
      } else {
        formData1.append(`${mainKey}[${key}][]`, item);
      }
    });
  } else if (typeof value == 'object' && value?.webkitRelativePath != '') {
    Object.entries(value).map(([key2, value]) => {
      formData1.append(`${mainKey}[${key}][]`, value);
    });
  } else {
    formData1.append(`${mainKey}[${key}]`, value);
  }
};

export const getValueInLink = (data, index) => {
  let Link = data.split('/');
  return Link[index];
};
