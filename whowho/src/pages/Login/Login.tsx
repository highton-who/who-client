/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import {
  pageStyle,
  logoStyle,
  formStyle,
  inputStyle,
  loginButtonStyle,
  linksRowStyle,
  textButtonStyle,
  dividerStyle,
} from './style'

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export default function Login() {
  const navigate = useNavigate()
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/home')
    }
  }, [navigate])

  const handleLogin = async () => {
    setError('')

    if (!loginId.trim() || !password.trim()) {
      setError('아이디와 비밀번호를 입력해 주세요.')
      return
    }

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, {
        loginId: loginId.trim(),
        password,
      })

      // 백엔드 응답 키가 accessToken 기준이라고 가정
      const accessToken = data?.accessToken

      if (!accessToken) {
        setError('토큰 응답이 올바르지 않습니다.')
        return
      }

      localStorage.setItem('token', accessToken)

      navigate('/home')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          setError('아이디 또는 비밀번호가 올바르지 않습니다.')
          return
        }

        // 백엔드가 에러 메시지를 내려주는 경우
        const backendType = (e.response?.data as { type?: string } | undefined)?.type
        if (backendType) {
          setError(`로그인 실패: ${backendType}`)
          return
        }
      }

      setError('서버에 연결할 수 없습니다.')
    }
  }

  return (
    <div css={pageStyle}>
      <img css={logoStyle} src={Logo} alt="후후 로고" />

      <div css={formStyle}>
        <input
          css={inputStyle}
          type="text"
          placeholder="아이디 입력"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />

        <input
          css={inputStyle}
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />

        {error && <p style={{ color: 'red', fontSize: '13px', margin: 0 }}>{error}</p>}

        <button css={loginButtonStyle} type="button" onClick={handleLogin}>
          로그인
        </button>

        <div css={linksRowStyle}>
          <button css={textButtonStyle} type="button">
            비밀번호 찾기
          </button>
          <div css={dividerStyle} />
          <button css={textButtonStyle} type="button" onClick={() => navigate('/join')}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}