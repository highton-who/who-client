
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import axios from 'axios'
import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import {
  pageStyle,
  logoStyle,
  formStyle,
  inputStyle,
  joinButtonStyle,
  linksRowStyle,
  textButtonStyle,
  dividerStyle,
} from './style'

export default function Join() {
  const navigate = useNavigate()
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async () => {
    if (!loginId.trim() || !password.trim()) {
      setError('아이디와 비밀번호를 입력해주세요.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/signup`,
        { loginId, password }
      )

      navigate('/login')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err.response) {
          // 네트워크 오류 or CORS 등 응답 자체가 없는 경우
          setError('[Network] 서버에 연결할 수 없습니다. 네트워크를 확인해주세요.')
          return
        }

        const status = err.response.status
        const serverMessage = err.response.data?.message

        const fallbackMessage: Record<number, string> = {
          400: '입력값을 확인해주세요.',
          401: '인증에 실패했습니다.',
          403: '접근 권한이 없습니다.',
          404: '요청한 리소스를 찾을 수 없습니다.',
          409: '이미 사용 중인 아이디입니다.',
          422: '입력값 형식이 올바르지 않습니다.',
          500: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          502: '서버와 통신 중 오류가 발생했습니다.',
          503: '서버가 일시적으로 사용 불가 상태입니다.',
        }

        const message = serverMessage ?? fallbackMessage[status] ?? '회원가입에 실패했습니다.'
        setError(`[${status}] ${message}`)
      } else {
        setError('알 수 없는 오류가 발생했습니다.')
      }
    } finally {
      setIsLoading(false)
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
          onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
        />

        {error && (
          <p style={{ color: 'red', fontSize: '13px', margin: '4px 0 0' }}>{error}</p>
        )}

        <button css={joinButtonStyle} type="button" onClick={handleSignup} disabled={isLoading}>
          {isLoading ? '가입 중...' : '회원가입'}
        </button>

        <div css={linksRowStyle}>
          <button css={textButtonStyle} type="button">
            비밀번호 찾기
          </button>
          <div css={dividerStyle} />
          <button css={textButtonStyle} type="button" onClick={() => navigate('/login')}>
            로그인
          </button>
        </div>
      </div>
    </div>
  )
}