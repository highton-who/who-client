/** @jsxImportSource @emotion/react */
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

  return (
    <div css={pageStyle}>
      <img css={logoStyle} src={Logo} alt="후후 로고" />

      <div css={formStyle}>
        <input css={inputStyle} type="text" placeholder="아이디 입력" />
        <input css={inputStyle} type="password" placeholder="비밀번호 입력" />

        <button css={joinButtonStyle} type="button">
          회원가입
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