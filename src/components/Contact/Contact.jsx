import React from 'react';
import './contact.css'




import { MdEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const Contact = () => {



  return (<>

    <div id="contact">
    
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact_icon" />
            <h4>Email</h4>
            <h6>nicolasramos.borner@gmail.com</h6>
            <a href="mailto:nicolasramos.borner@gmail.com" target="_blank" rel="noreferrer">enviar mensaje</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h6>+54 9 1164953125</h6>
            <a href="https://api.whatsapp.com/send?phone=5491164953125" target="_blank" rel="noreferrer">enviar mensaje</a>
          </article>
        </div>

        <form>
        <h2>Contacto</h2>
          <span className="p-float-label">
            <InputText id="name" className="input"  type="text" name="name" required />
            <label htmlFor="name">nombre</label>
          </span>
          <span className="p-float-label">
            <InputText id="email" className="input" type="email" name="email" required />
            <label htmlFor="email">email</label>
          </span>
          <span className="p-float-label">
            <InputTextarea  id="message" className="textArea" name="message" rows="7" required></InputTextarea >
            <label htmlFor="message">Mensage</label>
          </span>

          <button type='submit' className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>


  </>
  )
}

export default Contact