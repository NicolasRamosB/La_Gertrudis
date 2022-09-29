import React from 'react'

import SlaidesLanding from '../SlaidesLanding/SlaidesLanding'
import './about.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IconsAbout from './IconsAbout/IconsAbout';
import { useTranslation } from 'react-i18next'


const About = () => {
    AOS.init();

  const [t, i18n] = useTranslation("global");

    return (
        <>
            <section className='about__container' id="about">
                <article className='about__article-header '>
                    <div className='about__contain' data-aos="fade-right" >
                        <h1>{t("about.titleAboutUs")}</h1>
                        <p>{t("about.textAboutUs")}</p>
                    </div>

                    <img src="/assets/familia.png" alt="pasto" data-aos="fade-left"

                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center" />


                </article>

                <article className='about_article-main'  >
                    <div className='about__container-description' data-aos="fade-left">
                        <h2>{t("about.titleOurAmenities")}</h2>
                        <p>{t("about.textOurAmenities")}</p>
                    </div>

                    <IconsAbout/>

                </article>
                <SlaidesLanding />

            </section>

        </>

    )



}

export default About