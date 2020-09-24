import {getCookie, setCookie, deleteCookie} from '~/lib/cookie-helpers'

export default async function ({app, route}) {
  const queryToken = route.query.token
  const cookieToken = getCookie('access-token')
  const token = queryToken || cookieToken
  
  if (!token) return

  if (queryToken) setCookie('access-token', token)

  app.$axios.setToken(token, 'Bearer')

  return app.$axios.get('/users/me')
    .then(res => {
      let user = res.data
  
      app.store.commit('auth/setUser', user)
      app.store.commit('auth/setLoggedIn', true)
    })
    .catch(err => {
      deleteCookie('access-token')
      app.$axios.setToken(false)
    })
}