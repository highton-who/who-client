import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as s from './style'
import ProfileIcon from '../../assets/profileIcon.svg'

export default function Detail() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }
  const giftData = {
    imageUrl: "https://your-server-image-url.com/flower.jpg", // 서버 이미지 주소
    title: "생일에 받은 선물~!",
    content: "나의 생일의 좋은 꽃말이 담겨있는 꽃을 선물로 받았당\n이날은 너무 행복해서 영원히 기억하고싶다!!\n민수야 너무좋다~~",
    date: "2008.07.04",
    type: "생일선물",
    price: "12,500원",
    sender: "김민수",
    memo: "민수는 향수좋아함, 다음에 우디향 향수같은걸 줘야겟음"
  }

  return (
    <div css={s.pageStyle}>
      <div css={s.containerStyle}>
        {/* 상단 이미지 영역 - 서버 주소를 바로 src에 사용 */}
        <div css={s.imageBoxStyle}>
          <button css={s.backButtonStyle} onClick={handleBackClick}>&lt;</button>
          <img src={giftData.imageUrl} alt="Gift" />
        </div>

        <div css={s.contentSectionStyle}>
          {/* 제목 섹션 */}
          <div css={s.groupStyle}>
            <label css={s.labelStyle}>제목</label>
            <div css={s.displayBoxStyle}>{giftData.title}</div>
          </div>

          {/* 본문 섹션 */}
          <div css={s.groupStyle}>
            <label css={s.labelStyle}>본문</label>
            <div css={s.displayBoxStyle}>
              {giftData.content.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br/></React.Fragment>
              ))}
            </div>
          </div>

          {/* 인물 정보 영역 */}
          <div css={s.profileRowStyle}>
            <img src={ProfileIcon} alt="Profile" />
            <div css={s.infoTextStyle}>
              <div className="top">{giftData.date} / {giftData.type} / {giftData.price}</div>
              <div className="name">{giftData.sender}</div>
            </div>
          </div>

          {/* 메모 영역 */}
          <div css={s.displayBoxStyle}>
            {giftData.memo}
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