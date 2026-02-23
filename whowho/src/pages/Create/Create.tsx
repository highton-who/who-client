import { useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'
import Nav from '../../components/nav'
import * as s from './style'

export default function Create() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [giftPrice, setGiftPrice] = useState('')
  const [occasion, setOccasion] = useState('')
  const [memo, setMemo] = useState('')
  const [tags, setTags] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setImageFile(file)

    const previewUrl = URL.createObjectURL(file)
    setImagePreviewUrl(previewUrl)
  }

  const handleSubmit = async () => {
    if (isSubmitting) return

    if (!title.trim()) {
      alert('제목을 입력해줘!')
      return
    }

    if (!description.trim()) {
      alert('본문을 입력해줘!')
      return
    }

    if (!name.trim()) {
      alert('선물을 준 사람 이름을 입력해줘!')
      return
    }

    try {
      setIsSubmitting(true)

      const requestBody = {
        title: title.trim(),
        description: description.trim(),
        giftedPerson: {
          name: name.trim(),
          birthday: birthday.trim(),
          giftPrice: giftPrice ? Number(giftPrice) : 0,
          occasion: occasion.trim(),
          memo: memo.trim(),
          tags: tags
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean),
        },
      }

      const formData = new FormData()
      formData.append(
        'request',
        new Blob([JSON.stringify(requestBody)], { type: 'application/json' })
      )

      if (imageFile) {
        formData.append('image', imageFile)
      }

      console.log('create post path:', '/posting')
      console.log('requestBody:', requestBody)
      console.log('imageFile:', imageFile)

      // api.ts에서 baseURL + 토큰 자동 첨부
      const response = await api.post('/posting', formData)

      console.log('create post success:', response.data)
      alert('선물 추가 완료!')
      navigate('/home')

      setTitle('')
      setDescription('')
      setImageFile(null)
      setImagePreviewUrl('')
      setName('')
      setBirthday('')
      setGiftPrice('')
      setOccasion('')
      setMemo('')
      setTags('')
    } catch (error) {
      console.error('create post error:', error)
      alert('등록 실패! (게시글 등록) 콘솔에서 에러 확인해줘')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div css={s.pageStyle}>
      <section css={s.formCardStyle}>
        <div css={s.sectionStyle}>
          <label
            style={{ display: 'block', cursor: 'pointer' }}
          >
            <div css={s.imageUploadBoxStyle}>
              {imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  alt="선물 이미지 미리보기"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
              ) : (
                <>
                  <div css={s.imageMainTextStyle}>사진 추가하기</div>
                  <div css={s.imageSubTextStyle}>클릭해서 사진첩에서 선택</div>
                </>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </label>

          <div
            style={{ marginTop: '8px', fontSize: '12px', color: '#888' }}
          >
            선택한 이미지는 파일(form-data)로 업로드되고, 나머지 정보는 request JSON으로 함께 전송됩니다.
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div css={s.sectionStyle}>
          <label css={s.labelStyle}>선물을 준 사람 정보</label>

          <div css={s.personGridStyle}>
            <input
              css={s.inputStyle}
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              css={s.inputStyle}
              type="text"
              placeholder="준 사람의 생일 (YYYY-MM-DD)"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <input
              css={s.inputStyle}
              type="number"
              placeholder="선물 가격"
              value={giftPrice}
              onChange={(e) => setGiftPrice(e.target.value)}
            />
            <input
              css={s.inputStyle}
              type="text"
              placeholder="선물 목적"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
          </div>

          <textarea
            css={s.textareaStyle}
            style={{ marginTop: '10px' }}
            rows={3}
            placeholder="메모 (선물을 준 사람의 취향, 다음에 돌려주고 싶은 선물 힌트 등)"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />

          <input
            css={s.inputStyle}
            style={{ marginTop: '10px' }}
            type="text"
            placeholder="태그 (쉼표로 구분) 예: 이직응원, 건강식품, 5만원대"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div css={s.submitWrapStyle}>
          <button type="button" css={s.submitButtonStyle} onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? '추가 중...' : '선물 추가하기'}
          </button>
        </div>
      </section>

      <div css={s.navWrapStyle}>
        <Nav active="plus" />
      </div>
    </div>
  )
}