/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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
} from './style'

interface Feed {
  id: number
  imgUrl: string
  title: string
}

// 레벨별 다음 레벨까지 필요한 피드 수
// Lv1 → 2: 15개, Lv2 → 3: 30개, Lv3+: 50개
const LEVEL_THRESHOLDS = [15, 30, 50]

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
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/feed`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const data: Feed[] = await res.json()
        console.log('data[0]:', data[0])

        setFeeds(data)

        // 피드 수 기준으로 레벨 계산 후 로컬에 저장
        localStorage.setItem('feedCount', String(data.length))
        setLevelInfo(getLevelInfo(data.length))
      } catch (err) {
        console.error('feed 불러오기 실패:', err)
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
            <img src={Char1} alt="Char1" />
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