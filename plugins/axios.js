export default function ({$axios, store }) {
  $axios.onRequest(config => {
    if (store.getters['auth/loading']) {
      return
    } else {
      store.dispatch('auth/toggleLoading', true)
    }
  })
  $axios.onResponse(response => {
    store.dispatch('auth/toggleLoading', false)
  })
}