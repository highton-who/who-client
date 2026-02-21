import { css } from '@emotion/react'

export const pageStyle = css`
  min-height: 100vh;
  position: relative;
  padding-top: 86px;
  background-color: #FCFFE9;
`

export const navWrapStyle = css`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100;
`

export const PetArea = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 381px;
  margin-top: 15px;
`

export const TextAreaWrap = css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 57px;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    z-index: 10;
    font-size: 13px;
    font-weight: 600;
    color: #333;
    text-align: center;
    width: 270px;
  }

  img {
    width: 270px;
    height: 100%;
    object-fit: cover;
  }
`

export const Pet = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 300px;
  position: relative;
`

export const PetBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  z-index: 5;
  margin-bottom: -10px;
`

export const PotArea = css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 170px;
`

export const LevelBarWrap = css`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 180px; 
  z-index: 10;
`

export const LevelBadge = css`
  background-color: #e0e0e0;
  padding: 1px 8px;
  border-radius: 8px 8px 0 0;
  font-size: 11px;
  font-weight: 800;
  color: #333;
  margin-left: 6px;
`

export const ProgressBar = css`
  width: 100%;
  height: 18px;
  background-color: #fff;
  border: 3px solid #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
`

export const ProgressFill = css`
  height: 10px;
  margin: 0 2px;
  background: repeating-linear-gradient(
    90deg,
    #d4f591,
    #d4f591 12px,
    #ffffff 12px,
    #ffffff 15px
  );
  width: 60%; 
  border-radius: 10px;
`

export const MainFooter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 402px;
  height: 397px;
  background-color: white;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  position: fixed;
  bottom: 1px;
`

export const MainFooterHeader = css`
  width: 100%;
  height: 30px;
  padding-left: 30px;
  margin-top: 30px;
  
  span {
    font-size: 15px;
    font-weight: 500;
  }
`

export const CardSlide = css`
  width: 355px;
  max-width: 355px;
  height: 195px;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  gap: 12px;
  padding: 0 4px;
  margin-top: 15px;
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const SlideCard = css`
  min-width: 140px;
  height: 180px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(-2px);
  }
`

export const CardImage = css`
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
`

export const CardContent = css`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const CardTitle = css`
  font-size: 13px;
  font-weight: 700;
  color: #333;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardDate = css`
  font-size: 11px;
  font-weight: 500;
  color: #999;
  margin: 0;
`