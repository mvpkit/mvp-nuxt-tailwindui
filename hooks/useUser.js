import { setCookie, deleteCookie } from '~/lib/cookie-helpers'
import useApi from '../hooks/useApi'
export default function useUser() {
  const { call, data, loading, error } = useApi()
  const login = (email, password) => {
    call('POST', '/auth/login', { email, password }, (res) => {
      setCookie('accessToken', res.accessToken);
      window.location.href = '/';
    })
  }
  const logout = () => {
    deleteCookie('accessToken');
    window.location.href = '/';
  }
  return {
    data,
    loading,
    error,
    login,
    logout,
  }
}
