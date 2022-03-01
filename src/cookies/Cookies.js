import Cookies from "universal-cookie";

const cookies = new Cookies()
export const setCookie = (name, data) => {
    const value = cookies.set(name, data, { path: '/' });
    return value
}

export const getCookie = (name) => {
    const value = cookies.get(name)
    return value
}

export const getAllCookies = () => {
    const value = cookies.getAll()
    return value;
}

export const removeCookie = (name) => {
    cookies.remove(name)
}

export const removeAllCookies = () => {
    const cookies = getAllCookies()
    Object.keys(cookies).forEach((cookie) => removeCookie(cookie))
}