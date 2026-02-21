import { css } from '@emotion/react'
import Nav from '../components/nav'
import Card from '../components/card'

const pageStyle = css`
  min-height: 100vh;
  position: relative;
  padding: 24px 16px 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`

const navWrapStyle = css`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
`

const dummyGift = {
  title: '이레가 준 선물~',
  imgURL: 'https://images.unsplash.com/photo-1512389098783-66b81f86e199?auto=format&fit=crop&w=800&q=80',
}

export default function Home() {
  return (
    <div css={pageStyle}>
      <Card title={dummyGift.title} imgURL={dummyGift.imgURL} />

      <div css={navWrapStyle}>
        <Nav active="home" />
      </div>
    </div>
  )
}