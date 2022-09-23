import React from 'react'
import iconsAbout from '../../iconsAbout'
import './about.css'



const About = () => {
    return (
        <main id="about" >

            <section className='about__container'>
                <article className='about__article-header'>
                    <div className='about__contain'>
                        <h1>Sobre Nosotros</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Error odio explicabo soluta nesciunt? Ex voluptates reiciendis
                            beatae velit laboriosam nihil quis. Itaque assumenda explicabo
                            eveniet natus ab adipisci consequatur enim.</p>
                    </div>

                    <img src="/assets/familia.png" alt="pasto" />


                </article>

                <article className='about_article-main'>
                    <div className='about__container-description'>
                        <h2>Nuestras Comodidades</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                            omnis cupiditate asperiores nostrum modi, magni, delectus facilis ullam quam cum
                            minus quis voluptatum debitis? Repudiandae quia deleniti amet et repellendus. Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam impedit magni dolorem
                            ut recusandae dolores rerum voluptatibus excepturi quae!
                            Ipsa animi rem in eveniet tempora reprehenderit aut atque nostrum voluptates!</p>
                    </div>

                    <div className='about__container-icons'>

                        {
                            iconsAbout.map((item) => {
                                return (
                                    <i key={item.id} >
                                        <img src={item.img} alt={item.id} />
                                        <p>{item.title}</p>
                                    </i>

                                )
                            })
                        }


                    </div>

                </article>
            </section>

        </main>
    )
}

export default About