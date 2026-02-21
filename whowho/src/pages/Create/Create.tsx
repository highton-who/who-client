import { useRef, useState } from 'react'
import axios from 'axios'
import { css } from '@emotion/react'
import Nav from '../../components/nav'
import * as s from './style'

export default function Create() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFileName, setSelectedFileName] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')

  const handleClickUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setSelectedFileName(file ? file.name : '')
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImagePreviewUrl(previewUrl)
    } else {
      setImagePreviewUrl('')
    }
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')
    
    // 토큰 확인
    if (!token) {
      alert('로그인이 필요합니다.')
      return
    }

    const titleEl = document.getElementById('gift-title') as HTMLInputElement | null
    const contentEl = document.getElementById('gift-content') as HTMLTextAreaElement | null
    const personInputs = document.querySelectorAll('[data-person-input]') as NodeListOf<HTMLInputElement>
    const personMemoEl = document.getElementById('gift-person-memo') as HTMLTextAreaElement | null
    const file = fileInputRef.current?.files?.[0]

    if (!titleEl?.value.trim()) {
      alert('제목을 입력해주세요!')
      return
    }

    if (!contentEl?.value.trim()) {
      alert('본문을 입력해주세요!')
      return
    }

    try {
      // 이미지를 Base64로 인코딩
      let imageBase64 = ''
      if (file) {
        imageBase64 = await new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      }

      const formData = new FormData()
      
      const request = {
        title: titleEl.value.trim(),
        description: contentEl.value.trim(),
        image: imageBase64,
        giftedPerson: personInputs[0]?.value ?? '',
        giftedPersonBirthday: personInputs[1]?.value ?? '',
        giftPrice: personInputs[2]?.value ?? '',
        giftPurpose: personInputs[3]?.value ?? '',
        giftedPersonMemo: personMemoEl?.value ?? '',
      }
      
      formData.append('request', JSON.stringify(request))

      console.log('📤 요청 정보:')
      console.log('   URL:', `${import.meta.env.VITE_API_BASE_URL}/posting`)
      console.log('   Token:', `${token.substring(0, 20)}...`)
      console.log('   Image 크기:', imageBase64.length)
      
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/posting`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      )

      console.log('✅ 요청 전송 완료:', response.data)
      alert('업로드 성공!')
      
      // 폼 초기화
      titleEl.value = ''
      contentEl.value = ''
      personInputs.forEach(input => input.value = '')
      personMemoEl.value = ''
      setImagePreviewUrl('')
      setSelectedFileName('')
      fileInputRef.current!.value = ''
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('❌ 요청 전송 중 오류:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          message: error.message,
        })
        alert(`업로드 실패: ${error.response?.status} ${error.response?.data?.message || error.response?.statusText}`)
      } else {
        console.error('❌ 요청 전송 중 오류:', error)
        alert('업로드 실패!')
      }
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
            {imagePreviewUrl ? (
              <img
                src={imagePreviewUrl}
                alt="사진 미리보기"
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 16px;
                `}
              />
            ) : (
              <>
                <div css={s.imageMainTextStyle}>사진 업로드</div>
                <div css={s.imageSubTextStyle}>
                  {selectedFileName || '클릭해서 이미지 파일 선택'}
                </div>
              </>
            )}
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