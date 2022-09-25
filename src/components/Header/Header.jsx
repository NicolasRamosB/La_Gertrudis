import React from 'react'

import About from '../About/About'
import Banner from '../Banner/Banner';
import Galery from '../Galery/Galery';
import Reviews from '../Reviews/Reviews';
import Form from '../Form/Form';


import SlaidesLanding from '../SlaidesLanding/SlaidesLanding'
import './header.css'
const Header = () => {
  return (
    <>
      <header className='header__landing'>
        <div className='front_contain_img'>
        </div>
      </header>
      <About />
      <SlaidesLanding />
      <Reviews />
      <Banner />
      <Galery />
      <Form />
      
    </>
  )
}

export default Header