import React from 'react'
import { wrapperStyle } from './style'
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div style={wrapperStyle}>
      <img src={Logo} alt=""/>
    </div>
  )
}

export default Header
