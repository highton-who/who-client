import { css } from '@emotion/react'

export const cardStyle = css`
  background: #eef1dc;
  border-radius: 18px;
  padding: 10px;
  box-sizing: border-box;
  min-height: 178px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
`

export const thumbWrapStyle = css`
  position: relative;
  background: #f8f8f8;
  border: 2px solid #e7e7e7;
  border-radius: 16px;
  height: 108px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const thumbStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const actionButtonStyle = css`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  color: #111;
  font-size: 13px;
  font-weight: 700;
  padding: 7px 12px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`

export const titleStyle = css`
  margin: 10px 2px 4px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  color: #232323;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const priceStyle = css`
  margin: 0 2px;
  font-size: 14px;
  color: #9c9c9c;
  font-weight: 500;
`
