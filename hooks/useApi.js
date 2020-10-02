import { useFetch } from 'vue-composable'
import { setCookie, deleteCookie } from '~/lib/cookie-helpers'
export default function useApi() {
  const baseUrl = process.env.PROXY_API_URL
  const { data, loading, exec, error } = useFetch()

  function call(method, endpoint, body, cb) {
    exec(`${baseUrl}${endpoint}`, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        cb(json);
        console.log('useApi res', json)
      })
  }

  return {
    call,
    data,
    loading,
    error,
  }
}
