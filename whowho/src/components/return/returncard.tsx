import {
  cardStyle,
  thumbWrapStyle,
  thumbStyle,
  actionButtonStyle,
  titleStyle,
  priceStyle,
} from './style'

export default function ReturnCard() {
  return (
    <article css={cardStyle}>
      <div css={thumbWrapStyle}>
        <img
          css={thumbStyle}
          src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
          alt="완숙 토마토"
        />
        <button type="button" css={actionButtonStyle}>
          선물하기
        </button>
      </div>

      <p css={titleStyle}>완숙 토마토 유럽종 5kg 10kg</p>
      <p css={priceStyle}>8500원</p>
    </article>
  )
}