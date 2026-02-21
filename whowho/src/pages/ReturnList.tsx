import { css } from '@emotion/react'
import Nav from '../components/nav'
import Header from '../components/header'

const pageStyle = css`
  width: 100vw;
  height: 100vh;
  max-width: 402px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  position: relative;
  padding-top: 76px;
  box-sizing: border-box;
`


const navWrapStyle = css`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
`

export default function ReturnList() {
  return (
    <div css={pageStyle}>
      <Header />
      <div css={navWrapStyle}>
        <Nav active="list" />
      </div>
    </div>
  )
}