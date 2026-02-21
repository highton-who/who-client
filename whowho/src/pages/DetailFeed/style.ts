import { css } from '@emotion/react'

const COLORS = {
  primary: '#B2F281',
  bg: '#F8F8F8',
  card: '#FFFFFF',
  text: '#111111',
  muted: '#6B7280',
  line: '#EAEAEA',
  inputBg: '#F5F5F5',
}

export const pageStyle = css`
  min-height: 100vh;
  background: ${COLORS.bg};
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`

export const containerStyle = css`
  width: 100%;
  max-width: 420px;
  background: ${COLORS.card};
  border-radius: 28px;
  border: 1px solid ${COLORS.line};
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
`

export const imageBoxStyle = css`
  position: relative;
  width: 100%;
  height: 327px;
  background-color: #f9f9f9;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const backButtonStyle = css`
  position: absolute;
  top: 24px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${COLORS.text};
`

export const contentSectionStyle = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const groupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const labelStyle = css`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.text};
`

export const displayBoxStyle = css`
  padding: 10px 15px;
  gap:10px;
  border-radius:13px;
  background-color:#F8F8F8;
  border: 1px solid #DDDDDD;
  color: #BCBCBC;
  font-size:15px;
`

export const profileRowStyle = css`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 0;
`

export const avatarStyle = css`
  width: 52px;
  height: 52px;
  background: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

export const infoTextStyle = css`
  .top {
    font-size: 14px;
    color: #AAAAAA;
    margin-bottom: 4px;
  }
  .name {
    font-size: 20px;
    font-weight: 400;
    color: black;
  }
`

export const footerButtonStyle = css`
  width: 100%;
  height: 56px;
  background: #EAF9E7;
  border: 1px solid #DDDDDD;
  border-radius: 13px;
  color: #BCBCBC;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;

  &:active {
    background: #def2db;
  }
`