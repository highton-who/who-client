import axios from 'axios'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    console.log('[api request] token from localStorage:', token)

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    console.log('[api request] method:', config.method)
    console.log('[api request] url:', `${config.baseURL ?? ''}${config.url ?? ''}`)
    console.log('[api request] Authorization header:', config.headers.Authorization)

    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => {
    console.log('[api response] status:', response.status)
    console.log('[api response] url:', response.config?.url)
    return response
  },
  (error) => {
    console.error('[api error] status:', error.response?.status)
    console.error('[api error] data:', error.response?.data)
    console.error('[api error] url:', error.config?.url)
    console.error('[api error] Authorization header:', error.config?.headers?.Authorization)
    return Promise.reject(error)
  }
)

export default api