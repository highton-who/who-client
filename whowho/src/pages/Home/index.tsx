import Nav from '../../components/nav'
import { navWrapStyle, pageStyle } from './style'
import Headers from '../../components/header'


export default function Home() {
  return (
    <div css={pageStyle}>
        <Headers />
      <div css={navWrapStyle}>
        <Nav active="home" />
      </div>
    </div>
  )
}