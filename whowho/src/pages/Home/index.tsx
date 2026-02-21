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
    imgURL: "data:image/jpeg;base64,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",
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
    navigate(`/gift/${id}`)
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