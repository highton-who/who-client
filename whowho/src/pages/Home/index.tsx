/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/nav'
import Headers from '../../components/header'
import TextArea from '../../assets/textArea.svg'
import PotIcon from '../../assets/pot.svg'
import Char1 from '../../assets/char1.svg'
import api from '../../api/api'

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

type GiftItem = {
  id: number
  title: string
  imgUrl: string
  date: string
}

export default function Home() {
  const navigate = useNavigate()

  const [gifts, setGifts] = useState<GiftItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        setIsLoading(true)
        const response = await api.get('/feed')

        const rawList = Array.isArray(response.data)
          ? response.data
          : Array.isArray(response.data?.data)
            ? response.data.data
            : Array.isArray(response.data?.feeds)
              ? response.data.feeds
              : []

        const mapped: GiftItem[] = rawList.map((item: any, index: number) => ({
          id: Number(item.id ?? item.feedId ?? index + 1),
          title: String(item.title ?? item.name ?? '제목 없음'),
          imgUrl: String(item.imgUrl ?? item.imageUrl ?? item.imgURL ?? ''),
          date: formatDate(item.createdAt ?? item.date ?? item.createdDate),
        }))

        setGifts(mapped)
      } catch (error) {
        console.error('home feed fetch error:', error)
        setGifts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchGifts()
  }, [])

  const formatDate = (value: unknown) => {
    if (!value) return ''

    const date = new Date(String(value))
    if (Number.isNaN(date.getTime())) return String(value)

    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}.${m}.${d}`
  }

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
          {isLoading ? (
            <div>불러오는 중...</div>
          ) : gifts.length === 0 ? (
            <div>아직 등록된 선물이 없어요.</div>
          ) : (
            gifts.map((gift) => (
              <div 
                key={gift.id}
                css={SlideCard}
                onClick={() => handleCardClick(gift.id)}
              >
                <img 
                  src={gift.imgUrl || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='}
                  alt={gift.title}
                  css={CardImage}
                />
                <div css={CardContent}>
                  <p css={CardTitle}>{gift.title}</p>
                  <p css={CardDate}>{gift.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
       
      <div css={navWrapStyle}>
        <Nav active="home" />
      </div>
    </div>
  )
}