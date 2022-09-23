import React from 'react'

import About from '../About/About'

import SlaidesLanding from '../SlaidesLanding/SlaidesLanding'
import './header.css'
const Header = () => {
  return (
    <>
    <header className='header__landing'>
      <div className='front_contain_img'>
      </div>
    </header>
    <About/>
    <SlaidesLanding/>
   
    </>
  )
}

export default Header