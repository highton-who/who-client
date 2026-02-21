import { useRef, useState } from 'react'
import { css } from '@emotion/react'
import Nav from '../../components/nav'
import * as s from './style'

export default function Create() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFileName, setSelectedFileName] = useState('')

  const handleClickUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setSelectedFileName(file ? file.name : '')
  }

  const handleSubmit = async () => {
    const titleEl = document.getElementById('gift-title') as HTMLInputElement | null
    const contentEl = document.getElementById('gift-content') as HTMLTextAreaElement | null
    const personInputs = document.querySelectorAll('[data-person-input]') as NodeListOf<HTMLInputElement>
    const personMemoEl = document.getElementById('gift-person-memo') as HTMLTextAreaElement | null
    const file = fileInputRef.current?.files?.[0]

    const formData = new FormData()
    formData.append('title', titleEl?.value ?? '')
    formData.append('description', contentEl?.value ?? '')
    formData.append('giftedPerson', personInputs[0]?.value ?? '')
    formData.append('giftedPersonBirthday', personInputs[1]?.value ?? '')
    formData.append('giftPrice', personInputs[2]?.value ?? '')
    formData.append('giftPurpose', personInputs[3]?.value ?? '')
    formData.append('giftedPersonMemo', personMemoEl?.value ?? '')

    if (file) {
      formData.append('image', file)
    }

    try {
      const response = await fetch('/api/gifts', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('업로드 실패')
      }

      console.log('form-data 전송 완료')
    } catch (error) {
      console.error('form-data 전송 중 오류:', error)
    }
  }

  return (
    <div css={s.pageStyle}>
      <section css={s.formCardStyle}>
        <div css={s.sectionStyle}>
          <div
            css={s.imageUploadBoxStyle}
            onClick={handleClickUpload}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleClickUpload()
            }}
          >
            <div css={s.imageMainTextStyle}>사진 업로드</div>
            <div css={s.imageSubTextStyle}>
              {selectedFileName || '클릭해서 이미지 파일 선택 (form-data 전송)'}
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            css={css`
              display: none;
            `}
          />
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
            <input data-person-input css={s.inputStyle} type="text" placeholder="이름 " />
            <input data-person-input css={s.inputStyle} type="text" placeholder="준 사람의 생일" />
            <input data-person-input css={s.inputStyle} type="text" placeholder="선물 가격" />
            <input data-person-input css={s.inputStyle} type="text" placeholder="선물 목적" />
          </div>
          <textarea
            id="gift-person-memo"
            css={css`
              ${s.textareaStyle};
              margin-top: 10px;
            `}
            rows={3}
            placeholder="메모 (선물을 준 사람의 취향, 다음에 돌려주고 싶은 선물 힌트 등)"
          />
        </div>

        <div css={s.submitWrapStyle}>
          <button type="button" css={s.submitButtonStyle} onClick={handleSubmit}>
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