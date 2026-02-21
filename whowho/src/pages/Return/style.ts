import { css } from '@emotion/react'

export const pageStyle = css`
  width: 100vw;
  min-height: 100vh;
  max-width: 402px;
  margin: 0 auto;
  background-color: #f3f4f0;
  position: relative;
  padding-top: 76px;
  padding-bottom: 120px;
  box-sizing: border-box;
  overflow-x: hidden;
`

export const navWrapStyle = css`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
`

export const heroSectionStyle = css`
  background: #e9ecd9;
  padding: 20px 18px 22px;
`

export const titleLogoStyle = css`
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  margin: 0 0 18px;
`

export const chipRowStyle = css`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const chipStyle = (active: boolean) => css`
  min-width: 77px;
  height: 28px;
  border-radius: 27px;
  border: ${active ? '2px solid #7ccd6a' : 'none'};
  background: ${active ? '#e8f6df' : '#d8d8d8'};
  color: ${active ? '#6fca5c' : '#a8a8a8'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
`

export const heroContentStyle = css`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
`

export const speechWrapStyle = css`
  position: relative;
  width: 230px;
  height: 150px;
  flex-shrink: 0;
`

export const speechBgStyle = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const speechTextStyle = css`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.45;
  color: #1f1f1f;
  padding: 8px 26px 8px 22px;
  white-space: pre-line;
`

export const characterStyle = css`
  width: 150px;
  height: auto;
  object-fit: contain;
  transform: translateY(6px);
`

export const contentSectionStyle = css`
  background: #f6f6f6;
  padding: 18px 16px 0;
`

export const sectionTitleStyle = css`
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 600;
  color: #141414;
`

export const cardGridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`
