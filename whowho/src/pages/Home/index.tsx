/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../../components/nav'
import Headers from '../../components/header'
import TextArea from '../../assets/textArea.svg'
import PotIcon from '../../assets/pot.svg'
import Char1 from '../../assets/char1.svg'
import Char2 from '../../assets/char2.svg'

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
} from './style'

interface Feed {
  id: number
  imgUrl: string
  title: string
}

// 레벨별 다음 레벨까지 필요한 피드 수
// Lv1 → 2: 3개, Lv2 → 3: 30개, Lv3+: 50개
const LEVEL_THRESHOLDS = [3, 30, 50]

function getLevelInfo(feedCount: number): { level: number; progress: number } {
  let remaining = feedCount
  let level = 1

  for (const threshold of LEVEL_THRESHOLDS) {
    if (remaining < threshold) {
      return { level, progress: remaining / threshold }
    }
    remaining -= threshold
    level++
  }

  // 최대 레벨 도달 시 꽉 찬 상태
  return { level, progress: 1 }
}

export default function Home() {
  const navigate = useNavigate()
  const [feeds, setFeeds] = useState<Feed[]>([])
  const [levelInfo, setLevelInfo] = useState(() => {
    // 초기값은 로컬스토리지에서 복원
    const saved = localStorage.getItem('feedCount')
    return saved ? getLevelInfo(Number(saved)) : { level: 1, progress: 0 }
  })

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const token = localStorage.getItem('token')
        console.log(' Token:', token ? `있음 (${token.substring(0, 20)}...)` : '없음')
        console.log(' API URL:', `${import.meta.env.VITE_API_BASE_URL}/feed`)

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/feed`,
          {
            headers: {
              'Content-Type': 'application/json',
              ...(token && { 'Authorization': `Bearer ${token}` }),
            },
          }
        )
        
        console.log('✅ Feed data loaded:', data)

        let feedArray: Feed[] = []
        if (Array.isArray(data)) {
          feedArray = data
        } else if (data?.data && Array.isArray(data.data)) {
          feedArray = data.data
        } else if (data?.feeds && Array.isArray(data.feeds)) {
          feedArray = data.feeds
        }

        setFeeds(feedArray)
        localStorage.setItem('feedCount', String(feedArray.length))
        setLevelInfo(getLevelInfo(feedArray.length))
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error('feed 불러오기 실패:', {
            status: err.response?.status,
            statusText: err.response?.statusText,
            data: err.response?.data,
            message: err.message,
          })
        } else {
          console.error(' feed 불러오기 실패:', err)
        }
        
        // 실패 시 더미 데이터 사용
        
      }
    }

    fetchFeeds()
  }, [])

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
            <img src={levelInfo.level >= 2 ? Char2 : Char1} alt="Character" />
          </div>
          <div css={PotArea}>
            <img src={PotIcon} alt="Pot" />
            
            <div css={LevelBarWrap}>
              <div css={LevelBadge}>Lv.{levelInfo.level}</div>
              <div css={ProgressBar}>
                {/* ProgressFill에 progress 비율(0~1) 전달 — style.ts에서 width로 사용 */}
                <div css={ProgressFill(levelInfo.progress)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div css={MainFooter}>
        <div css={MainFooterHeader}>
          <span>지난날의 추억</span>
        </div>
        
        <div css={CardSlide}>
          {feeds.map((feed) => (
            <div 
              key={feed.id}
              css={SlideCard}
              onClick={() => navigate(`/feed/${feed.id}`)}
            >
              <img 
                src={feed.imgUrl} 
                alt={feed.title}
                css={CardImage}
              />
              <div css={CardContent}>
                <p css={CardTitle}>{feed.title}</p>
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