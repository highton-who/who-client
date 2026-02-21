import { css } from '@emotion/react'
import Nav from '../components/nav'
import * as s from './createstyle'

export default function Create() {
  return (
    <div css={s.pageStyle}>
      <section css={s.formCardStyle}>
        <div css={s.sectionStyle}>
          <div css={s.imageUploadBoxStyle}>
            <div css={s.imageMainTextStyle}>사진 URL 또는 업로드 영역</div>
            <div css={s.imageSubTextStyle}>나중에 연결될 자리 (현재 UI 목업)</div>
          </div>
        </div>

        <div css={s.sectionStyle}>
          <label css={s.labelStyle} htmlFor="gift-title">
            제목
          </label>
          <input
            id="gift-title"
            css={s.inputStyle}
            type="text"
            placeholder="예: 생일에 받은 무선 이어폰"
          />
        </div>

        <div css={s.sectionStyle}>
          <label css={s.labelStyle} htmlFor="gift-content">
            본문
          </label>
          <textarea
            id="gift-content"
            css={s.textareaStyle}
            rows={5}
            placeholder="언제 받았는지, 왜 좋았는지, 기억하고 싶은 포인트를 적어보세요."
          />
        </div>

        <div css={s.sectionStyle}>
          <label css={s.labelStyle}>선물을 준 사람 정보</label>
          <div css={s.personGridStyle}>
            <input css={s.inputStyle} type="text" placeholder="이름 (예: 민수)" />
            <input css={s.inputStyle} type="text" placeholder="준 사람의 생일 (예: 03.14)" />
            <input css={s.inputStyle} type="text" placeholder="선물 가격 (예: 49000원)" />
            <input css={s.inputStyle} type="text" placeholder="상황 (예: 생일 / 출장선물)" />
          </div>
          <textarea
            css={css`
              ${s.textareaStyle};
              margin-top: 10px;
            `}
            rows={3}
            placeholder="메모 (선물을 준 사람의 취향, 다음에 돌려주고 싶은 선물 힌트 등)"
          />
        </div>

        <div css={s.submitWrapStyle}>
          <button type="button" css={s.submitButtonStyle}>
            선물 추가하기
          </button>
        </div>
      </section>

      <div css={s.navWrapStyle}>
        <Nav active="plus" />
      </div>
    </div>
  )
}