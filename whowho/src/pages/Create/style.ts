import { css } from '@emotion/react'

const COLORS = {
  primary: '#B2F281',
  sub: '#FDE480',
  bg: '#F8F8F8',
  card: '#FFFFFF',
  text: '#111111',
  muted: '#6B7280',
  line: '#EAEAEA',
}

export const pageStyle = css`
  min-height: 100vh;
  background: ${COLORS.bg};
  position: relative;
  padding: 104px 20px 140px;
  box-sizing: border-box;
`

export const headerStyle = css`
  margin-top: 8px;
  margin-bottom: 20px;
`

export const titleStyle = css`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  color: ${COLORS.text};
  letter-spacing: -0.02em;
`

export const subtitleStyle = css`
  margin: 8px 0 0;
  font-size: 14px;
  color: ${COLORS.muted};
  line-height: 1.4;
`

export const formCardStyle = css`
  background: ${COLORS.card};
  border: 1px solid ${COLORS.line};
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
`

export const sectionStyle = css`
  & + & {
    margin-top: 14px;
  }
`

export const labelStyle = css`
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${COLORS.text};
`

export const helperStyle = css`
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.muted};
`

export const imageUploadBoxStyle = css`
  height: 220px;
  border-radius: 16px;
  background: 
    rgba(178, 242, 129, 0.12) ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.text};
  text-align: center;
  gap: 10px;
`

export const imageBadgeStyle = css`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${COLORS.card};
  border: 1px solid ${COLORS.line};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

export const imageMainTextStyle = css`
  font-size: 15px;
  font-weight: 700;
`

export const imageSubTextStyle = css`
  font-size: 12px;
  color: ${COLORS.muted};
`

export const inputStyle = css`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${COLORS.line};
  background: #fafafa;
  padding: 0 14px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${COLORS.text};
  outline: none;

  &:focus {
    border-color: ${COLORS.primary};
    background: #fff;
    box-shadow: 0 0 0 3px rgba(178, 242, 129, 0.18);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const textareaStyle = css`
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${COLORS.line};
  background: #fafafa;
  padding: 12px 14px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${COLORS.text};
  outline: none;
  resize: none;
  line-height: 1.45;

  &:focus {
    border-color: ${COLORS.primary};
    background: #fff;
    box-shadow: 0 0 0 3px rgba(178, 242, 129, 0.18);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

export const personGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`


export const submitWrapStyle = css`
  margin-top: 18px;
`

export const submitButtonStyle = css`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 14px;
  background: ${COLORS.primary};
  color: #5a3921;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(178, 242, 129, 0.3);

  &:active {
    transform: translateY(1px);
  }
`

export const navWrapStyle = css`
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 100;
`
