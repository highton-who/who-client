import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import * as s from './style'
import ProfileIcon from '../../assets/profileIcon.svg'

interface FeedDetail {
  id: number
  imgUrl: string
  title: string
  content: string
  date: string
  type: string
  price: string
  sender: string
  memo: string
}

export default function Detail() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [feedData, setFeedData] = useState<FeedDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeedDetail = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('token')
        const { data } = await axios.get<FeedDetail>(
          `${import.meta.env.VITE_API_BASE_URL}/feed/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              ...(token && { Authorization: `Bearer ${token}` }),
            },
          }
        )
        setFeedData(data)
        setError(null)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error('피드 상세 조회 실패:', {
            status: err.response?.status,
            data: err.response?.data,
            message: err.message,
          })
          setError('피드를 불러올 수 없습니다.')
        } else {
          console.error('피드 상세 조회 실패:', err)
          setError('오류가 발생했습니다.')
        }
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchFeedDetail()
    }
  }, [id])

  const handleBackClick = () => {
    navigate('/home')
  }

  if (loading) {
    return (
      <div css={s.pageStyle}>
        <div css={s.containerStyle}>
          <p style={{ textAlign: 'center', paddingTop: '50px' }}>로딩 중...</p>
        </div>
      </div>
    )
  }

  if (error || !feedData) {
    return (
      <div css={s.pageStyle}>
        <div css={s.containerStyle}>
          <button css={s.backButtonStyle} onClick={handleBackClick}>&lt;</button>
          <p style={{ textAlign: 'center', paddingTop: '50px' }}>{error || '데이터를 찾을 수 없습니다.'}</p>
        </div>
      </div>
    )
  }

  return (
    <div css={s.pageStyle}>
      <div css={s.containerStyle}>
        {/* 상단 이미지 영역 - 서버 주소를 바로 src에 사용 */}
        <div css={s.imageBoxStyle}>
          <button css={s.backButtonStyle} onClick={handleBackClick}>&lt;</button>
          <img src={feedData.imgUrl} alt="Gift" />
        </div>

        <div css={s.contentSectionStyle}>
          {/* 제목 섹션 */}
          <div css={s.groupStyle}>
            <label css={s.labelStyle}>제목</label>
            <div css={s.displayBoxStyle}>{feedData.title}</div>
          </div>

          {/* 본문 섹션 */}
          <div css={s.groupStyle}>
            <label css={s.labelStyle}>본문</label>
            <div css={s.displayBoxStyle}>
              {feedData.content.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br/></React.Fragment>
              ))}
            </div>
          </div>

          {/* 인물 정보 영역 */}
          <div css={s.profileRowStyle}>
            <img src={ProfileIcon} alt="Profile" />
            <div css={s.infoTextStyle}>
              <div className="top">{feedData.date} / {feedData.type} / {feedData.price}</div>
              <div className="name">{feedData.sender}</div>
            </div>
          </div>

          {/* 메모 영역 */}
          <div css={s.displayBoxStyle}>
            {feedData.memo}
          </div>

          {/* 하단 버튼 */}
          <button type="button" css={s.footerButtonStyle}>
            마음을 보답하기
          </button>
        </div>
      </div>
    </div>
  )
}