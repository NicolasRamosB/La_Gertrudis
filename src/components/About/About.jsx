import React from 'react'
import iconsAbout from '../../iconsAbout'
import SlaidesLanding from '../SlaidesLanding/SlaidesLanding'
import './about.css'



const About = () => {

    return (
        <>
            <section className='about__container' id="about">
                <article className='about__article-header'>
                    <div className='about__contain'>
                        <h1>Sobre Nosotros</h1>
                        <p> La Gertrudis es un lugar único, donde se valora a cada pasajero con un trato cordial, respetuoso y amigable. Nuestra idea es hacerte sentir como en tu propia casa priorizando tus necesidades y deseos, todo para que tu estadía se convierta en una experiencia inolvidable.</p>
                    </div>
                    
                    <img src="/assets/familia.png" alt="pasto" />


                </article>

                <article className='about_article-main'>
                    <div className='about__container-description'>
                        <h2>Nuestras Comodidades</h2>
                        <p>Nos diferenciamos por la atención personalizada para cada uno de los se queden con nosotros. También por nuestras comidas y desayunos.
Somos un proyecto sustentable y sostenible, siempre cuidando el medio ambiente, valorando actividades rurales como huerta, viñedos, vista de animales de granja entre otras experiencias que no te podes perder.
<br/>
Animate, veni a conocernos.</p>
                    </div>

                    <div className='about__container-icons'>

                        {
                            iconsAbout.map((item) => {
                                return (
                                    <span key={item.id} >
                                        <img src={item.img} alt={item.id} />
                                        <p>{item.title}</p>
                                    </span>

                                )
                            })
                        }


                    </div>

                </article>
                <SlaidesLanding />

            </section>

        </>
    )
}

export default About