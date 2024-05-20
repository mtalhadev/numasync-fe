import Cookies from 'js-cookie';

// Types
import { CookieName, CookieOptions, CookieValue } from 'src/types/cookieTypes';

// Function to set a cookie
const setCookie = (name: CookieName, value: CookieValue, options?: CookieOptions): void => {
  Cookies.set(name, value, { secure: true, ...options });
};

// Function to get a cookie
const getCookie = (name: CookieName): string | undefined => {
  return Cookies.get(name);
};

// Function to remove a cookie
const removeCookie = (name: CookieName): void => {
  Cookies.remove(name);
};

export { getCookie, removeCookie, setCookie };
