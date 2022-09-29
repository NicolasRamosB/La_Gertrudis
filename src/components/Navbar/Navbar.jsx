import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Breakpoint from "../Breakpoints/Breakpoints";
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'

import 'animate.css';
const Navbar = () => {

  const [t, i18n] = useTranslation("global");

  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    if (!menu) {
      setMenu(true)
    }
    else {
      setMenu(false)
    }
  }
  return (
    <>

      <Breakpoint at="lg">
        <nav>
          <ul className='nav__container'>

            <NavLink to="/#"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
            <NavLink to="/#">{t("nav.home")}</NavLink>
            <HashLink smooth to="/#about">{t("nav.aboutUs")}</HashLink >
            <NavLink to="/rooms">{t("nav.rooms")}</NavLink>
            <HashLink smooth to="/#gallery">{t("nav.gallery")}</HashLink >
          </ul>

          <ul className='links__container' >
            <div className='translate__container'>
              <button onClick={() => i18n.changeLanguage("es")} className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
              <button onClick={() => i18n.changeLanguage("en")} className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
            </div>

            <div className='line'></div>
            <div className="navIcons">
              <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <HiOutlineMail /></a>
              <a href="https://wa.me/5492622576877" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /></a>
              <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
            </div>
            <a href="/#contact" className='button__reserva'>{t("nav.book")}</a>
          </ul>
        </nav>
      </Breakpoint>




      <Breakpoint at="md">
        <nav className="responsiveNavMd">
          <ul className='nav__container'>

            <NavLink to="/#"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
            <NavLink to="/#">{t("nav.home")}</NavLink>
            <HashLink smooth to="/#about">{t("nav.aboutUs")}</HashLink >
            <NavLink to="/rooms">{t("nav.rooms")}</NavLink>
            <HashLink smooth to="/#gallery">{t("nav.gallery")}</HashLink >
          </ul>

          <ul className='links__container' >
            <div className='translate__container'>
              <button onClick={() => i18n.changeLanguage("es")} className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
              <button onClick={() => i18n.changeLanguage("en")} className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
            </div>

            <div className='line'></div>
            <div className="navIcons">
              <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <HiOutlineMail /></a>
              <a href="https://wa.me/5492622576877" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /></a>
              <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
            </div>
            <a href="/#contact" className='button__reserva'>{t("nav.book")}</a>
          </ul>
        </nav>
      </Breakpoint>



      <Breakpoint at="sm" >
        <nav className="responsiveNavXs">
          <div onClick={handleClick} className="menuIcon"><GiHamburgerMenu /></div>
          {menu &&
            <div
              className="navMenu animate__animated animate__slideInLeft" onClick={handleClick}
            >
              <AiOutlineCloseCircle className="closeMenu" onClick={handleClick} />
              <ul className="navLinks">
                <NavLink to="/#"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
                <NavLink to="/#">{t("nav.home")}</NavLink>
                <HashLink smooth to="/#about">{t("nav.aboutUs")}</HashLink >
                <NavLink to="/rooms">{t("nav.rooms")}</NavLink>
                <HashLink smooth to="/#gallery">{t("nav.gallery")}</HashLink >
              </ul>

              <ul className='links__container' >
                <div className='translate__container'>
                  <button onClick={() => i18n.changeLanguage("es")} className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
                  <button onClick={() => i18n.changeLanguage("en")} className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
                </div>

                <div className='line'></div>
                <div className="navIcons">
                  <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <HiOutlineMail /></a>
                  <a href="https://wa.me/5492622576877" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /></a>
                  <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
                </div>
                <a href="/#contact" className='button__reserva'>{t("nav.book")}</a>
              </ul>

            </div>
          }
          <NavLink to="/#"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
        </nav>
      </Breakpoint>





      <Breakpoint at="xs" >
        <nav className="responsiveNavXs">
          <div onClick={handleClick} className="menuIcon"><GiHamburgerMenu /></div>
          {menu &&
            <div
              className="navMenu animate__animated animate__slideInLeft" onClick={handleClick}
            >
              <AiOutlineCloseCircle className="closeMenu" onClick={handleClick} />
              <ul className="navLinks">
                <NavLink href="/#"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
                <NavLink to="/#">{t("nav.home")}</NavLink>
                <HashLink smooth to="/#about">{t("nav.aboutUs")}</HashLink >
                <NavLink to="/rooms">{t("nav.rooms")}</NavLink>
                <HashLink smooth to="/#gallery">{t("nav.gallery")}</HashLink >
              </ul>

              <ul className='links__container' >
                <div className='translate__container'>
                  <button onClick={() => i18n.changeLanguage("es")} className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
                  <button onClick={() => i18n.changeLanguage("en")} className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
                </div>

                <div className='line'></div>
                <div className="navIcons">
                  <a href="mailto:casadecampo.lagertrudis@gmail.com" target="_blank" rel="noopener noreferrer"> <HiOutlineMail /></a>
                  <a href="https://wa.me/5492622576877" target="_blank" rel="noopener noreferrer"> <FaWhatsapp /></a>
                  <a href="https://www.instagram.com/lagertrudis.sancarlos/?hl=es" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
                </div>
                <a href="/#contact" className='button__reserva'>{t("nav.book")}</a>
              </ul>

            </div>

          }
          <NavLink href="/#"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
        </nav>
      </Breakpoint>

    </>
  )
}

export default Navbar