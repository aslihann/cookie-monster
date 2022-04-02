import { CookieAttributes } from "../types";

export function getCookies() {
  return "getCookies";
}
export function setCookie({ name, value }: CookieAttributes) {
  return "setCookie";
}
export function removeCookie() {
  return "removeCookie";
}
export function readCookie() {
  return "readCookie";
}
// get-cookie
// set-cookie
// remove-cookie
