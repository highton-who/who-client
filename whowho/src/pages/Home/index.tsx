/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/nav'
import Headers from '../../components/header'
import TextArea from '../../assets/textArea.svg'
import PotIcon from '../../assets/pot.svg'
import Char1 from '../../assets/char1.svg'

import { 
  pageStyle, 
  navWrapStyle, 
  PetArea, 
  TextAreaWrap, 
  Pet, 
  PetBox, 
  PotArea,
  LevelBarWrap,
  LevelBadge,
  ProgressBar,
  ProgressFill,
  MainFooter,
  MainFooterHeader,
  CardSlide,
  SlideCard,
  CardImage,
  CardContent,
  CardTitle,
  CardDate,
} from './style'

// 더미 데이터
const dummyGifts = [
  {
    id: 1,
    title: "생일 꽃다발",
    imgURL: "https://via.placeholder.com/150/FFB6C1/FFFFFF?text=Flower",
    date: "2024.01.15"
  },
  {
    id: 2,
    title: "크리스마스 선물",
    imgURL: "https://via.placeholder.com/150/87CEEB/FFFFFF?text=Gift",
    date: "2023.12.25"
  },
  {
    id: 3,
    title: "졸업 축하 선물",
    imgURL: "https://via.placeholder.com/150/98FB98/FFFFFF?text=Graduate",
    date: "2024.02.20"
  },
  {
    id: 4,
    title: "기념일 케이크",
    imgURL: "https://via.placeholder.com/150/DDA0DD/FFFFFF?text=Cake",
    date: "2024.03.14"
  }
]

export default function Home() {
  const navigate = useNavigate()

  const handleCardClick = (id: number) => {
    navigate(`/feed/${id}`)
  }

  return (
    <div css={pageStyle}>
      <Headers />
      
      <div css={PetArea}>
        <div css={TextAreaWrap}>
          <p>오늘은 누구에게 보답 해볼가여???</p>
          <img src={TextArea} alt="" />
        </div>

        <div css={Pet}>
          <div css={PetBox}>
            <img src={Char1} alt="Char1" />
          </div>
          <div css={PotArea}>
            <img src={PotIcon} alt="Pot" />
            
            <div css={LevelBarWrap}>
              <div css={LevelBadge}>Lv.1</div>
              <div css={ProgressBar}>
                <div css={ProgressFill} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div css={MainFooter}>
        <div css={MainFooterHeader}>
          <span>지난날의 추억</span>
        </div>
        
        {/* 카드 슬라이더 */}
        <div css={CardSlide}>
          {dummyGifts.map((gift) => (
            <div 
              key={gift.id}
              css={SlideCard}
              onClick={() => handleCardClick(gift.id)}
            >
              <img 
                src={gift.imgURL} 
                alt={gift.title}
                css={CardImage}
              />
              <div css={CardContent}>
                <p css={CardTitle}>{gift.title}</p>
                <p css={CardDate}>{gift.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       
      <div css={navWrapStyle}>
        <Nav active="home" />
      </div>
    </div>
  )
}