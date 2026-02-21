import { css } from '@emotion/react'
import Nav from '../components/nav'

const pageStyle = css`
  width: 100vw;
  height: 100vh;
  max-width: 402px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  position: relative;
`


const navWrapStyle = css`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
`

export default function Profile() {
  return (
    <div css={pageStyle}>
      <div css={navWrapStyle}>
        <Nav active="user" />
      </div>
    </div>
  )
}