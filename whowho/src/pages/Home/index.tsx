import Nav from '../../components/nav'
import { navWrapStyle, pageStyle } from './style'
import Headers from '../../components/header'
import Card from '../../components/card'

const dummyGift = {
  title: '이레가 준 선물~',
  imgURL:
    'https://images.unsplash.com/photo-1512389098783-66b81f86e199?auto=format&fit=crop&w=800&q=80',
}

export default function Home() {
  return (
    <div css={pageStyle}>
        <Headers />
        <Card title={dummyGift.title} imgURL={dummyGift.imgURL} />
      <div css={navWrapStyle}>
        <Nav active="home" />
      </div>
    </div>
  )
}