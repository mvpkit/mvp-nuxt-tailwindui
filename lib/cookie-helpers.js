import Cookie from 'js-cookie'

const domain = process.env.env == 'production' ? process.env.host : null

export function getCookie(name) {
  return Cookie.get(name, { domain })
}

export function setCookie(name, value) {
  Cookie.set(name, value, { domain })
}

export function deleteCookie(name) {
  Cookie.remove(name, { domain })
}
