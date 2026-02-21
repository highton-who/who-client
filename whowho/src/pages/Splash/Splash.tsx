/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Up from '../../assets/splashup.svg'
import Down from '../../assets/splashdown.svg'

const wrapperStyle = css`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const contentStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-8px);
`

const upStyle = css`
  width: 105px;
  height: auto;
  margin-bottom: 10px;
  transform: translateX(-52px);
`

const downStyle = css`
  width: 120px;
  height: auto;
  margin-top: 14px;
  transform: translateX(62px);
`

const logoStyle = css`
  width: 168px;
  height: auto;
  display: block;
`

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login', { replace: true })
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div css={wrapperStyle}>
      <div css={contentStyle}>
        <img css={upStyle} src={Up} alt="윗줄기" />
        <img css={logoStyle} src={Logo} alt="후후 로고" />
        <img css={downStyle} src={Down} alt="아랫줄기" />
      </div>
    </div>
  )
}