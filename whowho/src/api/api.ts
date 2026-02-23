import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.16.20.196:8080/who',
})

const isJwtExpired = (token: string) => {
  try {
    const payloadBase64 = token.split('.')[1]
    if (!payloadBase64) return true

    const normalized = payloadBase64.replace(/-/g, '+').replace(/_/g, '/')
    const json = decodeURIComponent(
      atob(normalized)
        .split('')
        .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join('')
    )

    const payload = JSON.parse(json) as { exp?: number }
    if (!payload.exp) return false

    const nowSec = Math.floor(Date.now() / 1000)
    return payload.exp <= nowSec
  } catch {
    return true
  }
}

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    console.log('[api request] token from localStorage:', token)
    console.log('[api request] method:', config.method)
    console.log('[api request] url:', `${config.baseURL}${config.url}`)

    if (token && isJwtExpired(token)) {
      console.warn('[api request] token expired -> clearing localStorage')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      alert('로그인이 만료됐어요. 다시 로그인해줘!')
      window.location.href = '/login'
      return Promise.reject(new Error('TOKEN_EXPIRED'))
    }

    if (token) {
      config.headers = config.headers ?? {}
      config.headers.Authorization = `Bearer ${token}`
    }

    // multipart/form-data는 Content-Type 강제 지정하면 boundary 깨질 수 있음
    if (config.data instanceof FormData && config.headers) {
      delete (config.headers as Record<string, unknown>)['Content-Type']
      delete (config.headers as Record<string, unknown>)['content-type']
    }

    console.log('[api request] Authorization header:', config.headers?.Authorization)
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('[api error] status:', error.response?.status)
    console.log('[api error] data:', error.response?.data)
    console.log('[api error] url:', error.config?.url)
    console.log('[api error] Authorization header:', error.config?.headers?.Authorization)

    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      if (window.location.pathname !== '/login') {
        alert('인증이 만료되었거나 올바르지 않아요. 다시 로그인해줘!')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api