

import { css } from '@emotion/react'

export const pageStyle = css`
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 24px 40px;
  box-sizing: border-box;
`

export const logoStyle = css`
  width: 150px;
  height: auto;
  display: block;
  margin-top: 34px;
  margin-bottom: 120px;
`

export const formStyle = css`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const inputStyle = css`
  width: 100%;
  height: 64px;
  border-radius: 14px;
  border: 1px solid #d0d0d0;
  background: transparent;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 15px;
  color: #222;
  outline: none;

  &::placeholder {
    color: #b6b6b6;
  }

  &:focus {
    border-color: #b2f281;
    box-shadow: 0 0 0 2px rgba(178, 242, 129, 0.2);
  }
`

export const loginButtonStyle = css`
  width: 100%;
  height: 62px;
  margin-top: 2px;
  border: none;
  border-radius: 14px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }
`

export const linksRowStyle = css`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  color: #b0b0b0;
  font-size: 14px;
`

export const textButtonStyle = css`
  background: transparent;
  border: none;
  color: #b0b0b0;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
`

export const dividerStyle = css`
  width: 1px;
  height: 22px;
  background: #cfcfcf;
`