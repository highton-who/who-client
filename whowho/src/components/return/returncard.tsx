import {
  cardStyle,
  thumbWrapStyle,
  thumbStyle,
  actionButtonStyle,
  titleStyle,
  priceStyle,
} from './style'

interface ReturnCardProps {
  title?: string
  image?: string
}

export default function ReturnCard({ title = '선물', image }: ReturnCardProps) {
  return (
    <article css={cardStyle}>
      <div css={thumbWrapStyle}>
        <img
          css={thumbStyle}
          src={image || "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80"}
          alt={title}
        />
        <button type="button" css={actionButtonStyle}>
          선물하기
        </button>
      </div>

      <p css={titleStyle}>{title}</p>
      <p css={priceStyle}>추천 상품</p>
    </article>
  )
}