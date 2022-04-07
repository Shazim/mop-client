import cookie from 'js-cookie';

export const setCookie = (key, value, time = 1) => {
  cookie.set(key, value, { expires: time });
};

export const getCookie = (key) => {
  const value = cookie.get(key);
  return value;
};

// export const getAllCookie = () => {
//   const value = cookie.getAll();
//   return value;
// };

export const removeCookie = (key) => {
  cookie.remove(key);
};

// export const removeAllCookies = () => {
//   const cookies = getAllCookies();
//   Object.keys(cookies).forEach((cookie) => removeCookie(cookie));
// };
