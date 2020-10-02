import { getCookie } from '~/lib/cookie-helpers'
export default ({ store, redirect, route }) => {
  return new Promise(resolve => {
    const isLoginPage = route.path.includes("/login");
    const loggedIn = getCookie('accessToken');

    if (loggedIn) return isLoginPage ? redirect("/") : resolve();

    if (route.path.includes("/login")) return resolve();

    redirect("/login");
  });
};
