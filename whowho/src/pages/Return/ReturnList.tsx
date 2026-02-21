import Nav from '../../components/nav'
import Header from '../../components/header'
import {
  pageStyle,
  navWrapStyle,
  heroSectionStyle,
  chipRowStyle,
  chipStyle,
  heroContentStyle,
  speechWrapStyle,
  speechBgStyle,
  speechTextStyle,
  characterStyle,
  contentSectionStyle,
  sectionTitleStyle,
  cardGridStyle,
} from './style'
import Tori from '../../assets/Tori.png'
import TextBG from '../../assets/Textbg.png'
import ReturnCard from '../../components/return/returncard'

const people = ['김이레', '김이레', '김이레', '김이레', '김이레']

export default function ReturnList() {
  return (
    <div css={pageStyle}>
      <Header />

      <section css={heroSectionStyle}>

        <div css={chipRowStyle}>
          {people.map((name, idx) => (
            <button key={`${name}-${idx}`} type="button" css={chipStyle(idx === 0)}>
              {name}
            </button>
          ))}
        </div>

        <div css={heroContentStyle}>
          <div css={speechWrapStyle}>
            <img css={speechBgStyle} src={TextBG} alt="메시지 배경" />
            <p css={speechTextStyle}>
              {`오늘은 이레님의 생일입니당~!\n이레님한테 간단한\n선물을 보답해보세요!!`}
            </p>
          </div>
          <img css={characterStyle} src={Tori} alt="후후 캐릭터" />
        </div>
      </section>

      <section css={contentSectionStyle}>
        <h2 css={sectionTitleStyle}>이레님이 준 선물과 비슷해요</h2>

        <div css={cardGridStyle}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <ReturnCard key={idx} />
          ))}
        </div>
      </section>

      <div css={navWrapStyle}>
        <Nav active="list" />
      </div>
    </div>
  )
}
