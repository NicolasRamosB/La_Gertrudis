import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
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
          <a href="/"> <HiOutlineMail /></a>
          <a href="/"> <FaWhatsapp /></a>
          <a href="/"> <FaInstagram /></a>
          <a href="/#contact" className='button__reserva'>Reservar</a>
        </ul>


      </nav>
    </>
  )
}

export default Navbar