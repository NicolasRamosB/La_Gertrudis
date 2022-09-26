import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import Breakpoint from "../Breakpoints/Breakpoints";
import { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import 'animate.css';
const Navbar = () => {
  const [menu,setMenu] = useState(false);
  const handleClick = () =>{
    if(!menu){
      setMenu(true)
    }
    else{
      setMenu(false)
    }
  }
  return (
    <>
      
      <Breakpoint at="lg">
        <nav>
          <ul className='nav__container'>

            <NavLink href="/"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
            <NavLink to="/">Inicio</NavLink>
            <a href="/#about">Sobre Nosotros</a>
            <NavLink to="/rooms">Habitaciones</NavLink>
            <a href="/#galery">Galeria</a>
          </ul>

          <ul className='links__container' >
            <div className='translate__container'>
              <button className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
              <button className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
            </div>

            <div className='line'></div>
            <div className="navIcons">
              <a href="/"> <HiOutlineMail /></a>
              <a href="/"> <FaWhatsapp /></a>
              <a href="/"> <FaInstagram /></a>
            </div>
            <a href="/#contact" className='button__reserva'>Reservar</a>
          </ul>
        </nav>
      </Breakpoint>
      <Breakpoint at="md">
        <nav className="responsiveNavMd">
        <ul className='nav__container'>

          <NavLink href="/"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
          <NavLink to="/">Inicio</NavLink>
          <a href="#about">Sobre Nosotros</a>
          <NavLink to="/rooms">Habitaciones</NavLink>
          <a href="#galery">Galeria</a>
          </ul>

          <ul className='links__container' >
          <div className='translate__container'>
            <button className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
            <button className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
          </div>

          <div className='line'></div>
          <div className="navIcons">
            <a href="/"> <HiOutlineMail /></a>
            <a href="/"> <FaWhatsapp /></a>
            <a href="/"> <FaInstagram /></a>
          </div>
          <a href="#contact" className='button__reserva'>Reservar</a>
        </ul>
        </nav>
      </Breakpoint>
      <Breakpoint at= "sm" >
      <nav className="responsiveNavXs">
        <div onClick={handleClick} className="menuIcon"><GiHamburgerMenu/></div>
        {menu &&
        <div
          className="navMenu animate__animated animate__slideInLeft" onClick={handleClick}
          >
            <AiOutlineCloseCircle className="closeMenu" onClick={handleClick}/>
            <ul className="navLinks">
              <NavLink to="/">Inicio</NavLink>
              <a href="#about">Sobre Nosotros</a>
              <NavLink to="/rooms">Habitaciones</NavLink>
              <a href="#galery">Galeria</a>
            </ul>

            <ul className='links__container' >
              <div className='translate__container'>
                <button className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
                <button className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
              </div>

              <div className='line'></div>
              <div className="navIcons">
              <a href="/"> <HiOutlineMail /></a>
              <a href="/"> <FaWhatsapp /></a>
              <a href="/"> <FaInstagram /></a>
              </div>
              <a href="#contact" className='button__reserva'>Reservar</a>
            </ul>
            
          </div>
          
          }
        <NavLink href="/"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
        </nav>
      </Breakpoint>
      <Breakpoint at= "xs" >
      <nav className="responsiveNavXs">
        <div onClick={handleClick} className="menuIcon"><GiHamburgerMenu/></div>
        {menu &&
        <div
          className="navMenu animate__animated animate__slideInLeft" onClick={handleClick}
          >
            <AiOutlineCloseCircle className="closeMenu" onClick={handleClick}/>
            <ul className="navLinks">
              <NavLink to="/">Inicio</NavLink>
              <a href="#about">Sobre Nosotros</a>
              <NavLink to="/rooms">Habitaciones</NavLink>
              <a href="#galery">Galeria</a>
            </ul>

            <ul className='links__container' >
              <div className='translate__container'>
                <button className="button__translate"><img src="/assets/argentina.png" alt="arg" /></button>
                <button className="button__translate"><img src="/assets/usa.png" alt="usa" /></button>
              </div>

              <div className='line'></div>
              <div className="navIcons">
              <a href="/"> <HiOutlineMail /></a>
              <a href="/"> <FaWhatsapp /></a>
              <a href="/"> <FaInstagram /></a>
              </div>
              <a href="#contact" className='button__reserva'>Reservar</a>
            </ul>
            
          </div>
          
          }
        <NavLink href="/"><img src="/assets/Logo_LaGertrudis.png" alt="logo" /></NavLink>
        </nav>
      </Breakpoint>
        
    </>
  )
}

export default Navbar